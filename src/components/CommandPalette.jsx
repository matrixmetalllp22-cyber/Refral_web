import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Command Palette - Fast navigation with Ctrl+K
 */
export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const commands = [
    { label: "Home", path: "/", category: "Navigation" },
    { label: "About Us", path: "/about", category: "Navigation" },
    { label: "Products & Solutions", path: "/products", category: "Navigation" },
    { label: "Quality/Industries", path: "/industries", category: "Navigation" },
    { label: "Careers", path: "/careers", category: "Navigation" },
    { label: "News & Media", path: "/news", category: "Navigation" },
    { label: "Contact", path: "/contact", category: "Navigation" },
    { label: "Case Studies", path: "/case-studies", category: "Navigation" },
    { label: "Slitting Services", path: "/services/slitting", category: "Services" },
    { label: "Cut-To-Length", path: "/services/cut-to-length", category: "Services" },
    { label: "Packing Services", path: "/services/packing", category: "Services" },
    { label: "Blanking Services", path: "/services/blanking", category: "Services" },
  ];

  // Fuzzy search
  const filteredCommands = search
    ? commands.filter((cmd) =>
        cmd.label.toLowerCase().includes(search.toLowerCase()) ||
        cmd.category.toLowerCase().includes(search.toLowerCase())
      )
    : commands;

  // Open with Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
        setSearch("");
        setSelectedIndex(0);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Handle selection with arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
        navigate(filteredCommands[selectedIndex].path);
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, navigate]);

  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-orange-600 text-white shadow-lg hover:bg-orange-700 transition-all duration-200 z-40 group"
        title="Press Ctrl+K to open command palette"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="absolute -top-10 right-0 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Ctrl+K
        </span>
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="border-b border-gray-200 p-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    autoFocus
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setSelectedIndex(0);
                    }}
                    placeholder="Search pages and services..."
                    className="flex-1 outline-none text-lg bg-transparent"
                  />
                  <kbd className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded">
                    ESC
                  </kbd>
                </div>
              </div>

              {/* Commands List */}
              <div className="max-h-96 overflow-y-auto">
                {Object.entries(groupedCommands).map(([category, cmds]) => (
                  <div key={category}>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50 uppercase tracking-wide">
                      {category}
                    </div>
                    {cmds.map((cmd, idx) => {
                      const globalIndex = Object.values(groupedCommands)
                        .flat()
                        .indexOf(cmd);

                      return (
                        <motion.button
                          key={cmd.path}
                          onClick={() => {
                            navigate(cmd.path);
                            setIsOpen(false);
                          }}
                          whileHover={{ x: 4 }}
                          className={`
                            w-full text-left px-4 py-3 transition-colors flex items-center justify-between
                            ${
                              selectedIndex === filteredCommands.indexOf(cmd)
                                ? "bg-orange-50 text-orange-700"
                                : "text-gray-700 hover:bg-gray-50"
                            }
                          `}
                          onMouseEnter={() => setSelectedIndex(filteredCommands.indexOf(cmd))}
                        >
                          <span className="font-medium">{cmd.label}</span>
                          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </motion.button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs">↑↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs">↵</kbd>
                    Select
                  </span>
                </div>
                <span>{filteredCommands.length} results</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

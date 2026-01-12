
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// ThemeContext removed — dark mode disabled

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Careers from "./pages/Careers";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Applications from "./pages/Applications";
import CaseStudies from "./pages/CaseStudies";

// Service Pages
import Slitting from "./pages/services/Slitting";
import CutToLength from "./pages/services/CutToLength";
import Packing from "./pages/services/Packing";
import Blanking from "./pages/services/Blanking";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";

function AppContent() {
  useEffect(() => {
    // 🔒 Disable right-click (prevents "Inspect" & "Save As")
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // 🔒 Disable copy / cut / paste
    const disableCopy = (e) => e.preventDefault();
    document.addEventListener("copy", disableCopy);
    document.addEventListener("cut", disableCopy);
    document.addEventListener("paste", disableCopy);

    // 🔒 Disable key shortcuts like Ctrl+U, Ctrl+S, Ctrl+Shift+I, F12
    const disableShortcuts = (e) => {
      if (
        (e.ctrlKey && ["u", "s", "c", "x", "i", "j"].includes(e.key.toLowerCase())) ||
        e.key === "F12"
      ) {
        e.preventDefault();
        alert("Action disabled for content protection.");
      }
    };
    document.addEventListener("keydown", disableShortcuts);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("cut", disableCopy);
      document.removeEventListener("paste", disableCopy);
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen select-none">
        <Header />
        <CommandPalette />
        <main className="flex-grow pt-16 bg-gradient-to-br from-slate-50 to-white-300 :from-slate-900 dark:to-white   transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/case-studies" element={<CaseStudies />} />

            {/* Service Routes */}
            <Route path="/services/slitting" element={<Slitting />} />
            <Route path="/services/cut-to-length" element={<CutToLength />} />
            <Route path="/services/packing" element={<Packing />} />
            <Route path="/services/blanking" element={<Blanking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function App() {
  return <AppContent />;
}

export default App;

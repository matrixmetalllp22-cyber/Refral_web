// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👈 ADD THIS CONFIGURATION BLOCK
  preview: {
    // Allows all hosts/IPs to access the preview server.
    // This is necessary for deployment platforms like Render to work.
    allowedHosts: true
  }
});
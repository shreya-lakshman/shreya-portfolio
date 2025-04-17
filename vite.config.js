import React from "react";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/shreya-portfolio/',
  plugins: [react()],
});


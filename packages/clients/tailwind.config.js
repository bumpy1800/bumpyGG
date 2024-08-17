const designSystemConfig = require('@bumpygg/design/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [designSystemConfig],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', '../design/src/components/**/*.{ts,tsx}'],
};

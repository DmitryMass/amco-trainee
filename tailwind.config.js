/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    minHeight: {
      previewCalc: 'calc(100vh - 40px)',
    },
    extend: {
      fontFamily: {
        contrail: ['Contrail One', 'cursive'],
      },
      textColor: {
        lightGray: '#c0c0c0',
      },
    },
  },
  plugins: [],
};

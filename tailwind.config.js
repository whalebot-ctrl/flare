module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brandPurple: '#8e44ad',
        brandPink: '#d81159',
        brandRed: '#e74c3c',
      },
      fontFamily: {
        body: ['"Poppins"', 'sans-serif'],
        fancy: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};

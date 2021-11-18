module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        surface1: '#121212',
        surface2: '#212121',
      },
      fontFamily: {
        marker: ['Permanent Marker'],
        fredoka: ['Fredoka One'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

//Potential neon color: #FF0FF8

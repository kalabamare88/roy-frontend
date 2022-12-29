// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif']
    },
    extend: {
      fontSize: {
        14: '14px'
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        "success": "#7ed321",
        "success-100": "#F9FDF4",
        'dark': '#000000',
        "secondary": "#50e3c2",
        'darg-mg':"#334155",
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)'
      },
      width: {colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px'
      },
      height: {
        80: '80px'
      },
      minHeight: {
        590: '590px'
      },
    }
  },
  plugins: []
};

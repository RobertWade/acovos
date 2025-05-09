
module.exports = {
  purge: ['./index.html','App.vue', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        zimmer: ["Zimmer", "sans-serif"],
      },
      colors:{
        primary:'#5ABEC8',
        'primary--d1':'#EB367A',
        'primary--d2':'#1E828C',
        'primary--dark':'#196B73',
        'primary--verydark':'#46555A',
        'primary--l1':'#F4FBFB',
        'primary--l2':'#DEF2F4',
        'line':'#5D6D7333',
        text:'#5D6D73',
        'dark--lines':'#5D6D73',
        'dark--light':'#687A80',
        
        'text--brand':'#7C8E94'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

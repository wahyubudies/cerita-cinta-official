module.exports = {
  content: [
    './index.html',
    './public/js/script.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        'parisienne': ['"Parisienne"', 'cursive'],
        'neufreit': 'Neufreit'
      },
      backgroundImage: {
        'hero-background': "url('../images/assets/bw-hero-background.jpg')"
      }
    },
  },
  plugins: [],
}

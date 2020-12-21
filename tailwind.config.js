module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@ky-is/tailwindcss-plugin-width-height')({
      variants: ['responsive'],
    }),
  ],
}

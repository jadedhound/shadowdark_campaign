/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'OldLondon',
              fontWeight: '400',
              fontSize: '3rem',
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            h2: {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
              fontSize: '1.25rem',
              borderBottomWidth: '3px',
              lineHeight: '1.5',
              borderImage: 'linear-gradient(to right, #ca8a04 0, #ca8a04 30%, transparent 100%) 1'
            },
            h3: {
              fontSize: '1rem',
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
              textTransform: 'uppercase',
              textAlign: 'center'
            },
            a: {
              textTransform: 'capitalize',
              color: '#f59e0b'
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#d81825',
        'primary-text': '#1d1d1d',
        'secondary-text': '#4f4f4f'
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
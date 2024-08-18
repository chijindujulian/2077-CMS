/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  colors: {
		black: '#1fb6ff',
		white: '#7e5bef',
		green: '#ff49db',
	  },
	  fontFamily: {
		sans: ['Graphik', 'sans-serif'],
		serif: ['Merriweather', 'serif'],
	  },
	  extend: {
		spacing: {
		  '8xl': '96rem',
		  '9xl': '128rem',
		},
		borderRadius: {
		  '4xl': '2rem',
		},
	  },
	},
  };
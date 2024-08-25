/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    safelist: ['dark'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            black: '#020302',
            white: '#efefef',
            green: '#C6FF50',
            greenLm: '#91b208',
            'green-900': '#789d2c',
            'gray-100': '#BDBDBD',
            'gray-200': '#767676',
            gray: '#1b1b1b',
            'gray-900': '#55565A',
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
            fontFamily: {
                avenir: ['Avenir', 'sans-serif'],
            },
            lineHeight: {
                'extra-loose': '2.5',
                'line-13': '13px',
                17: '18px',
            },
        },
    },
}

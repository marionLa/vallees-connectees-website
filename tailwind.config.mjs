/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        "./node_modules/flowbite/**/*.js"
        ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1200px',
            xl: '1440px',
        },


        fontFamily: {
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },

        },
        extend: {
            fontFamily: {
                sans: ['mono', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            colors: {
                'blue': '#4e878c',
                'purple': '#7e5bef',
                'pink': '#ff49db',
                'orange': '#ff7849',
                'green': '#13ce66',
                'yellow': '#ffc82c',
                'gray-dark': '#273444',
                'gray': '#8492a6',
                'gray-light': '#d3dce6',
                'white': '#ffffff',
            },
            fontSize: {
                fontSize: {
                    sm: '0.8rem',
                    base: '1rem',
                    xl: '1.25rem',
                    '2xl': '1.563rem',
                    '3xl': '1.953rem',
                    '4xl': '2.441rem',
                    '5xl': '3.052rem',
                }
            },

        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

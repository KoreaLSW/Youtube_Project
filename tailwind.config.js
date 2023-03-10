/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                brand: '#FF0000',
            },
            screens: {
                sm: { min: '0px', max: '768px' },
            },
            height: {
                500: '500px',
                720: '720px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('tailwind-scrollbar-hide'),
    ],
};

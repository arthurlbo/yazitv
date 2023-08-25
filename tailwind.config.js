/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0E1217",
                hover: "#2D323B",
                accent: "#FF2798",
                complementary: "#772BFB",
                primary: "#ffffff",
                secondary: "#A8B3CF",
                tertiary: "#70788C",
            },
            fontFamily: {
                sans: "var(--font-poppins)",
            },
        },
    },
    plugins: [],
};

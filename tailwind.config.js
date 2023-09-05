/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
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
            screens: {
                tall: { raw: "((min-height: 850px))" },
                massive: { raw: "((min-width: 1600px))" },
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")({ nocompatible: true })],
};

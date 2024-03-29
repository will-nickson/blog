const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
    plugins: [
        plugin(function ({ addVariant }) {
            // this class is applied to `html` by `app/theme-efect.ts`, similar
            // to how `dark:` gets enabled
            addVariant("theme-system", ".theme-system &");
        }),
    ],
    future: {
        hoverOnlyWhenSupported: true,
    },
    theme: {
        extend: {
            textUnderlineOffset: {
                5: "5px",
            },
        },
    },
};

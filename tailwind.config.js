/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-robot)"],
      },
      typography: ({ theme }) => ({
        custom: {
          css: {
            "--tw-prose-body": theme("colors.neutral[300]"),
            "--tw-prose-headings": theme("colors.neutral[300]"),
            "--tw-prose-lead": theme("colors.neutral[100]"),
            "--tw-prose-links": theme("colors.neutral[300]"),
            "--tw-prose-bold": theme("colors.neutral[100]"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};

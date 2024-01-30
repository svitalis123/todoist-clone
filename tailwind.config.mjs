/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      navbar_selected: '#fee6e3',
      navbar_on_selected_tint: '#c3392c',
      primary_disabled: '#eda59e',
      actionable_primary: '#dc4c3e',
      tertiary_hover: '#ffaaa1',
      color1: '#202020',
      primary_bg: '#fcfaf8',
      color_3: '#faf8f7',
      library_navbar_hover: '#f6efee',
      button_color: '#d1453b'
    },
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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
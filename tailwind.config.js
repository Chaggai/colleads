/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Varela Round"],
      },
      // Icons
      content: {
        google: 'url("/icons/google-logo.svg")',
        facebook: 'url("/icons/facebook-logo.svg")',
        apple: 'url("/icons/apple-logo.svg")',
        checkbox: 'url("/icons/checkbox.svg")',
        "checkbox-checked": 'url("/icons/checkbox-checked.svg")',
        "menu-dots": 'url("/icons/menu-dots.svg")',
        "document-with-stars": 'url("/icons/document-with-stars.svg")',
        bell: 'url("/icons/bell.svg")',
        pin: 'url("/icons/pin.svg")',
        tune: 'url("/icons/tune.svg")',
      },
      flex: {
        "1-0-149": "1 0 149px",
      },
      colors: {
        site: {
          bg: "#eef8ff",
          lightblue: "#20a5fd",
          purple: "#6c27f2",
          blue: "#274ef2",
          torquoise: "#23e8f7",
          green: "#27f29b",
          yellow: "#f7d323",
          orange: "#f7aa23",
          pink: "#f9216f",
        },
      },
    },
  },
  plugins: [],
};

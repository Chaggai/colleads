/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Varela Round"],
      },
      flex: {
        "two-columns": "1 0 150px",
      },
      height: {
        header: "80px",
        body: "calc(100vh - 80px - 60px)",
        footer: "60px",
      },
      margin: {
        header: "80px",
        footer: "60px",
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

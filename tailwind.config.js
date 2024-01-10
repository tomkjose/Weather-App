module.exports = {
  content: ["./src/**/*/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "400px" },
      md: { max: "767px" },
      lg: { max: "1179px" },
      xl: { max: "1279px" },
      "2xl": { max: "1535px" },
    },
    colors: {
      disabledText: "#7b7980",
      disabledBackground: "#3e3d40",
      locationBtn: "#b49be0",
      locationBtnText: "#3f2d63",
      cardColor: "#1d1c1f",
      bgCard: "#1a191c",
      bgGood: "#89e589",
      bgModarate: "#e5dd89",
      bgBad: "#e589b7",
      subtitle: "grey",
      textAirStatus: "black",
      fofBtn: "#b5a1e5",
    },

    fontFamily: {
      nunito: ["Nunito Sans"],
    },
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      keyframes: {
        "pan-x": {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "1000px 0" }, // adjust distance
        },
        "pan-y": {
          "0%": { "background-position": "0 0" },
          "100%": { "background-position": "0 1000px" }, // adjust distance
        },
      },
      animation: {
        "pan-slow-x": "pan-x 40s linear infinite",
        "pan-slower-x": "pan-x 80s linear infinite",
        "pan-slow-y": "pan-y 40s linear infinite",
      },
    },
  },
  plugins: [],
};

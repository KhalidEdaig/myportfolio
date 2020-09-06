module.exports = {
  theme: {
    boxShadow: {
      default: "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)",
      md: " 0 4px 6px -1px #3498db, 0 2px 4px -1px #3498db)",
      lg:
        " 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
    },

    extend: {
      transitionDuration: {
        "0": "0ms",
        "600": "600ms",
        "2000": "2000ms",
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem",
      },
      height: {
        "81": "21rem",
        "85": "22rem",
        "89": "23rem",
        "96": "24rem",
        "120": "30rem",
      },
      width: {
        "81": "21rem",
        "96": "24rem",
        "120": "30rem",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    translate: ["responsive", "hover", "focus", "active", "group-hover"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
    margin: ["responsive", "hover", "focus"],
    width: ["responsive", "hover", "focus"],
    borderStyle: ["responsive", "hover", "focus"],
    zIndex: ["responsive", "hover", "focus"],
    transitionDuration: ["responsive", "hover", "focus"],
  },
  plugins: [],
};

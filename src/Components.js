import * as Stitches from "@stitches/react"

const stitches = Stitches.createStitches({
  media: {
    bp1: "(min-width: 320px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1200px)",
  },
  fontSizes: {
    sm: "10px",
    md: "16px",
    lg: "20px",
  },
})

const injectGlobalStyles = stitches.globalCss({
  "*": {
    boxSizing: "border-box",
    fontFamily: "'Helvetica', 'Arial', sans-serif",
  },
  "*:after": {
    boxSizing: "border-box",
    fontFamily: "'Helvetica', 'Arial', sans-serif",
  },
  "*:before": {
    boxSizing: "border-box",
    fontFamily: "'Helvetica', 'Arial', sans-serif",
  },
  body: { margin: 0, padding: 0, width: "100%" },
})

injectGlobalStyles()

export const Box = Stitches.styled("div", {
  display: "flex",

  variants: {
    align: {
      center: {
        alignItems: "center",
        justifyContent: "center",
      },
      left: {
        alignItems: "flex-start",
        justifyContent: "center",
      },
      right: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
      },
    },
  },
})

export const Button = Stitches.styled("button", {
  // base styles
  display: "block",
  border: "none",
  borderRadius: "5px",
  color: "white",

  "&:hover": {
    cursor: "pointer",
  },

  variants: {
    size: {
      sm: {
        fontSize: "13px",
        height: "25px",
        paddingRight: "10px",
        paddingLeft: "10px",
      },
      lg: {
        fontSize: "15px",
        height: "35px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
    bg: {
      primary: {
        backgroundColor: "#8EB50D",
        "&:hover": {
          backgroundColor: "#64b5f6",
        },
      },
      secondary: {
        backgroundColor: "#009688",
        "&:hover": {
          backgroundColor: "#4db6ac",
        },
      },
      danger: {
        backgroundColor: "#f44336",
        "&:hover": {
          backgroundColor: "#ef9a9a",
        },
      },
      success: {
        backgroundColor: "#4caf50",
        color: "white",
        "&:hover": {
          backgroundColor: "#a5d6a7",
        },
      },
    },
  },
})

export const Input = Stitches.styled("input", {
  display: "block",
  marginBottom: "10px",

  variants: {
    size: {
      sm: {
        fontSize: "13px",
        height: "25px",
        paddingRight: "10px",
        paddingLeft: "10px",
      },
      lg: {
        fontSize: "15px",
        height: "35px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
  },
})

export const Container = Stitches.styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  variants: {
    size: {
      sm: {
        width: "100%",
        height: "50px",
      },
      lg: {
        width: "100%",
        height: "60px",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      left: {
        alignItems: "flex-start",
      },
      right: {
        alignItems: "flex-end",
      },
    },
  },
})

export const Navbar = Stitches.styled("nav", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  borderBottom: "1px solid #e6e6e6",

  variants: {
    bg: {
      primary: {
        backgroundColor: "white",
      },
      secondary: {
        backgroundColor: "#009688",
      },
      danger: {
        backgroundColor: "#f44336",
      },
      success: {
        backgroundColor: "#4caf50",
      },
    },
  },
})

export const Avatar = Stitches.styled("img", {
  display: "inline-block",
  marginBottom: "10px",
  // base styles
  variants: {
    size: {
      sm: {
        width: "35px",
        height: "35px",
      },
      lg: {
        width: "90px",
        height: "90px",
      },
    },
  },
})

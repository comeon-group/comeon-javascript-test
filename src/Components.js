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
  body: { margin: 0, padding: 0 },
})

injectGlobalStyles()

export const Box = Stitches.styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",

  variants: {
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
        backgroundColor: "#2196f3",
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
  padding: "10px",
  backgroundColor: "white",

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

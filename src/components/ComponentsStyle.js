import * as Styles from "@stitches/react"

export const Box = Styles.styled("div", {
  display: "flex",

  variants: {
    align: {
      center: {
        alignItems: "center",
        justifyContent: "center",
      },
      left: {
        alignItems: "flex-start",
      },
      right: {
        alignItems: "flex-end",
        justifyContent: "flex-end",
      },
    },
  },
})

export const Button = Styles.styled("button", {
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
        fontSize: "12px",
        height: "25px",
        paddingRight: "10px",
        paddingLeft: "10px",
      },
      lg: {
        fontSize: "16px",
        height: "35px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
    bg: {
      primary: {
        backgroundColor: "#8EB50D",
        "&:hover": {
          backgroundColor: "#023020",
        },
      },
    },
  },
})

export const Input = Styles.styled("input", {
  display: "block",
  marginBottom: "10px",

  variants: {
    size: {
      sm: {
        fontSize: "12px",
        height: "20px",
        paddingRight: "8px",
        paddingLeft: "8px",
      },
      lg: {
        fontSize: "16px",
        height: "28px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
  },
})

export const Container = Styles.styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

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

export const Navbar = Styles.styled("nav", {
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
    },
  },
})

export const Avatar = Styles.styled("img", {
  display: "inline-block",
  zIndex: 1,
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
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CBB0D0",
    },
    secondary: {
      main: "#884A93",
    },
  },
  // breakpoints: {},
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        // root: { fontSize: "5rem", marginTop: "10rem" },
      },
    },
    // MuiTypography: {
    //   defaultProps: {},
    //   variants: {
    //     props: {
    //       variants: "h3",
    //     },
    //     style: {
    //       "@media (min-width:600px)": {
    //         fontSize: "1.5rem",
    //       },
    //     },
    //   },
    // },
  },

  typography: {
    // h3: {
    //   fontSize: "2rem",
    // },
    subtitle1: {
      fontSize: "1.3rem",
    },
  },
});

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    fontWeight: "normal",
  },
};

theme.typography.subtitle1 = {
  fontSize: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
};

export default theme;

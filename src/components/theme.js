import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      //   dark: "",
      //   light: "",
      //   mediumLight: "",
      //   default: "",
      main: "#000",
    },
    // secondary: {
    //   main: "",
    //   dark: "",
    //   light: "",
    // },
    // common: {},
    // nav: {
    //   main: "",
    //   light: "",
    //   dark: "",
    // },
  },
  breakpoints: {},
  components: {
    MuiButton: {
      styleOverrides: {
        // root: { fontSize: "5rem", marginTop: "10rem" },
      },
    },
  },
  spacing: {},
  typography: {
    h3: {},
    personalVariant: {},
  },
});

export default theme;

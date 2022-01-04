import React from "react";
import { Button, CssBaseline, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import Routes from "../pages/routes";
import Footer from "./Footer";
import Nav from "./Nav";
import theme from "./theme";

// import { styled } from "@mui/material/styles";

function App() {
  const [state, setState] = React.useState(0);

  const changeSt = () => {
    setState(state + 1);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav changeSt={changeSt} />
        <Routes />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

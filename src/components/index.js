import React from "react";
import { Button, Typography } from "@mui/material";
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
        <Nav changeSt={changeSt} />
        <Button onClick={changeSt}>change state </Button>
        <Typography>{state}</Typography>
        <Routes />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

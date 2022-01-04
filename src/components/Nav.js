import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Nav = ({ changeSt }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>Nav bar.</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ marginBottom: "4rem" }}></div>
    </>
  );
};

export default Nav;

import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Nav = ({ changeSt }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>Drawer</Typography>
          <Button onClick={changeSt} sx={{ bgcolor: "blue" }}>
            chnage
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ marginBottom: "4rem" }}></div>
    </>
  );
};

export default Nav;

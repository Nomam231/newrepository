import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "./theme";

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "6rem",
          bgcolor: theme.palette.primary.main,
        }}
      >
        <Typography>Footer</Typography>
      </Box>
    </div>
  );
};

export default Footer;

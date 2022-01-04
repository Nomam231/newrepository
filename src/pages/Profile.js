import { Typography } from "@mui/material";
import React from "react";

const Profile = () => {
  return (
    <div>
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: "1rem", sm: "4rem", md: "3rem", lg: "5rem" } }}
      >
        Profile page!
      </Typography>
    </div>
  );
};

export default Profile;

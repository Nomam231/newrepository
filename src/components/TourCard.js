import { Typography, Paper, Grid } from "@mui/material";
import React from "react";
import "./css/TourCard.css";

const TourCard = () => {
  return (
    <Grid item xs={10} md={6} lg={3}>
      <Paper elevation={20}>
        <img
          src="https://images.unsplash.com/photo-1641221179154-08bbe987a8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="image"
          className="img"
        />
        <Typography variant="h3">Card component.</Typography>
      </Paper>
    </Grid>
  );
};

export default TourCard;

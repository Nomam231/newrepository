import React from "react";
import { Grid, Typography, Button, Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TourCard from "../components/TourCard";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(matches);

  return (
    <div>
      <Container>
        <Typography variant="h2">Home page.</Typography>
        <Grid container spacing={5} justifyContent="center">
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
};

export default Home;

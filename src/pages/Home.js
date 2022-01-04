import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  console.log(matches);

  return (
    <div>
      <Typography variant="h2">Home page.</Typography>
      <Grid
        container
        direction={!matches ? "column" : "row"}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-between"
      >
        <Grid item xs={12} sm={5} md={5} lg={5}>
          <Button fullWidth variant="contained">
            item one
          </Button>
        </Grid>
        <Grid item xs={12} sm={5} md={5} lg={5}>
          <Button fullWidth variant="contained">
            Item two
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

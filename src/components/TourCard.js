import {
  Typography,
  Paper,
  Grid,
  Box,
  Stack,
  Item,
  Rating,
} from "@mui/material";
import React from "react";
import "./css/TourCard.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const TourCard = () => {
  return (
    <Grid item xs={10} md={6} lg={3}>
      <Paper elevation={20}>
        <img
          src="https://images.unsplash.com/photo-1641221179154-08bbe987a8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="image"
          className="img"
        />
        <Box padding={1}>
          <Typography variant="subtitle1" component="h2">
            Card component.
          </Typography>
          <Stack direction="row" spacing={1}>
            <AccessTimeIcon />
            <Typography variant="body">3 Hour's</Typography>
          </Stack>
          <Box sx={{ mt: 3 }}>
            <Stack direction={"row"} spacing={2}>
              <Rating readOnly value={3.4} precision={0.5} size="small" />
              <Typography>4.5</Typography>
              <Typography variant="body3">(306 review's)</Typography>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;

import { Box, Typography } from "@mui/material";
import React from "react";
import TravelCard from "../Components/Card/TravelCard";

const Home = () => {
  return (
    <Box
      sx={{
        width: "80%",
        margin: "0 auto",
        paddingTop: "80px",
      }}
    >
      <Typography variant="h1">My Travel's Blog</Typography>
      <Typography variant="h6" sx={{ marginY: "20px" }}>
        Those are my favorite places and I'll tell you why it's my dream to
        visit those beautiful cities.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginY: "50px",
        }}
      >
        <TravelCard height="500px" width="49%" />
        <TravelCard height="500px" width="49%" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TravelCard height="400px" width="33%" />
        <TravelCard height="400px" width="33%" />
        <TravelCard height="400px" width="33%" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginY: "20px",
        }}
      >
        <TravelCard height="400px" width="49%" />
        <TravelCard height="400px" width="49%" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TravelCard height="400px" width="33%" />
        <TravelCard height="400px" width="33%" />
        <TravelCard height="400px" width="33%" />
      </Box>
    </Box>
  );
};

export default Home;

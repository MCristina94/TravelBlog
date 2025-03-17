import { Box, Typography } from "@mui/material";
import React from "react";

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
    </Box>
  );
};

export default Home;

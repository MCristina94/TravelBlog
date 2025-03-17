import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar, Typography } from "@mui/material";
import logoAppBar from "../assets/images/logoMontain.png";
import { theme } from "../style/theme";

const AppAppBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          width: "80%",
          left: "50%",
          transform: "translateX(-50%)",
          marginY: "40px",
          borderRadius: "15px",
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 1px 10px 0 rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex ",
              marginLeft: "5px",
              alignItems: "center",
            }}
          >
            <IconButton edge="start">
              <img src={logoAppBar} alt="logo" style={{ width: 40 }} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: theme.colors.alernateGreen,
                fontWeight: theme.fonts.weight.bold,
                marginX: "10px",
              }}
            >
              Travel's Blog
            </Typography>
            <Typography
              variant="regular"
              component="div"
              sx={{ flexGrow: 1, color: "black", marginX: "10px" }}
            >
              Pictures
            </Typography>
            <Typography
              variant="regular"
              component="div"
              sx={{ flexGrow: 1, color: "black", marginX: "10px" }}
            >
              Review
            </Typography>
            <Typography
              variant="regular"
              component="div"
              sx={{ flexGrow: 1, color: "black", marginX: "10px" }}
            >
              Tips
            </Typography>
            <Typography
              variant="regular"
              component="div"
              sx={{ flexGrow: 1, color: "black", marginX: "10px" }}
            >
              About this page
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />
    </Box>
  );
};

export default AppAppBar;

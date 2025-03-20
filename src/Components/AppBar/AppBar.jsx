import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar, Typography } from "@mui/material";
import logoAppBar from "../../assets/images/logoMontain.png";
import { theme } from "../../style/theme";
import { useNavigate } from "react-router-dom";

const AppAppBar = () => {
  const navigate = useNavigate();
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
            <Box
              sx={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
              onClick={() => navigate("/")}
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
                  alignContent: "center",
                }}
              >
                Travel's Blog
              </Typography>
            </Box>

            <Box
              sx={{
                width: "80px",
                height: "35px",
                borderRadius: "10px",
                alignContent: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.colors.veryGray100,
                },
              }}
              onClick={() => navigate("/pictures")}
            >
              <Typography
                variant="regular"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "black",
                  marginX: "10px",
                }}
              >
                Pictures
              </Typography>
            </Box>
            <Box
              sx={{
                width: "200px",
                height: "35px",
                borderRadius: "10px",
                alignContent: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.colors.veryGray100,
                },
              }}
              onClick={() => navigate("/info-countries")}
            >
              <Typography
                variant="regular"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "black",
                  marginX: "10px",
                }}
              >
                Countries Information
              </Typography>
            </Box>
            <Box
              sx={{
                width: "150px",
                height: "35px",
                borderRadius: "10px",
                alignContent: "center",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.colors.veryGray100,
                },
              }}
            >
              <Typography
                variant="regular"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "black",
                  marginX: "10px",
                }}
                onClick={() => navigate("/about-page")}
              >
                About This Page
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />
    </Box>
  );
};

export default AppAppBar;

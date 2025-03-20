import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logoMontain.png";
import { theme } from "../../style/theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import MyIcon from "../../assets/images/MyIcon.png";

const Footer = () => {
  return (
    <Box>
      <Divider sx={{ marginY: "100px" }} />

      <Box
        sx={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          paddingBottom: "80px",
        }}
      >
        <img src={logo} alt="logo" style={{ width: "80px", height: "auto" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="regular"
            sx={{ marginX: "20px", fontWeight: theme.fonts.weight.bold }}
          >
            My Travel's Blog
          </Typography>
          <Typography variant="regular" sx={{ marginX: "20px" }}>
            This is a personal page where I can show my favorite places in the
            world
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginX: "10%" }} />
      <Box
        sx={{
          width: "90%",
          paddingY: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Button
          component="a"
          href="https://github.com/MCristina94"
          target="_blank"
          sx={{
            minWidth: "40px",
            width: "40px",
            height: "40px",
            padding: "8px",
            border: `1px solid ${theme.colors.neutralGray100}`,
            borderRadius: "10px",
            marginRight: "5px",
            "&:hover": {
              backgroundColor: theme.colors.veryGray100,
            },
          }}
        >
          <GitHubIcon sx={{ fontSize: "20px", color: theme.colors.black }} />{" "}
        </Button>
        <Button
          component="a"
          href="https://www.linkedin.com/in/maureen-cris/"
          target="_blank"
          sx={{
            minWidth: "40px",
            width: "40px",
            height: "40px",
            padding: "8px",
            border: `1px solid ${theme.colors.neutralGray100}`,
            borderRadius: "10px",
            marginRight: "5px",
            "&:hover": {
              backgroundColor: theme.colors.veryGray100,
            },
          }}
        >
          <LinkedInIcon sx={{ fontSize: "20px", color: theme.colors.black }} />
        </Button>
        <Button
          component="a"
          href="https://portafolio-maureen.vercel.app/"
          target="_blank"
          sx={{
            minWidth: "40px",
            width: "40px",
            height: "40px",
            padding: "8px",
            border: `1px solid ${theme.colors.neutralGray100}`,
            borderRadius: "10px",
            marginRight: "5px",
            "&:hover": {
              backgroundColor: theme.colors.veryGray100,
            },
          }}
        >
          <img
            src={MyIcon}
            alt="M icon"
            style={{ width: "25px", height: "auto" }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;

import React from "react";
import { Box, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { CustomCard } from "./styles";
import MoneyIcon from "@mui/icons-material/Money";
import LanguageIcon from "@mui/icons-material/Language";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TravelCard = ({ height, width, margin, ...rest }) => {
  return (
    <CustomCard height={height} width={width} {...rest}>
      <CardMedia
        sx={{ height: "250px" }}
        image="https://images.unsplash.com/photo-1734536314871-40de62976e1d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="foto ciudad"
      />
      <CardContent>
        <Typography variant="h4" sx={{ marginBottom: "5px" }}>
          Toronto - Canada
        </Typography>
        <Box
          sx={{
            marginY: "10px",
          }}
        >
          <Chip
            icon={<QueryBuilderIcon />}
            label="With Icon"
            sx={{ marginRight: "5px" }}
          />
          <Chip
            icon={<LanguageIcon />}
            label="With Icon"
            sx={{ marginRight: "5px" }}
          />
          <Chip
            icon={<MoneyIcon />}
            label="With Icon"
            sx={{ marginRight: "5px" }}
          />
        </Box>
        <Typography variant="sm">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginY: "20px",
          }}
        >
          <LocationOnIcon />
          <Typography variant="xs" sx={{ alignContent: "center" }}>
            {" "}
            see on google maps{" "}
          </Typography>
        </Box>
      </CardContent>
    </CustomCard>
  );
};

export default TravelCard;

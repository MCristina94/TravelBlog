import React from "react";
import { CustomCardCountry } from "./styles";
import LanguageIcon from "@mui/icons-material/Language";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PublicIcon from "@mui/icons-material/Public";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Box,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { theme } from "../../style/theme";

const CardCountries = ({
  height,
  width,
  margin,
  nameCountry,
  flag,
  capital,
  continent,
  timeZone,
  locationMap,
  languages,
  demonym,
  independent,
  ...rest
}) => {
  return (
    <CustomCardCountry>
      <CardMedia
        sx={{ height: "250px", width: "auto" }}
        image={flag}
        title="flag country"
      />
      <CardContent sx={{ width: "300px" }}>
        <Typography variant="h4" sx={{ marginBottom: "5px" }}>
          {nameCountry}
        </Typography>
        <Typography variant="h4" sx={{ marginBottom: "5px" }}>
          Capital: {capital}
        </Typography>
        <Typography variant="h4" sx={{ marginBottom: "5px", width: "300px" }}>
          Demonym:{demonym}
        </Typography>

        <Box
          sx={{
            marginY: "10px",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Chip
            icon={<QueryBuilderIcon />}
            label={timeZone}
            sx={{ marginRight: "5px" }}
          />
          <Chip
            icon={<LanguageIcon />}
            label={languages}
            sx={{ marginRight: "5px" }}
          />
          <Chip
            icon={<PublicIcon />}
            label={continent}
            sx={{ marginRight: "5px" }}
          />
        </Box>

        <Box
          component="a"
          href={locationMap}
          target="_blank"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            textDecoration: "none",
          }}
        >
          <IconButton>
            <PlaceIcon sx={{ color: theme.colors.alternateRed }} />
          </IconButton>
          <Typography sx={{ alignContent: "center", color: "black" }}>
            See on google maps
          </Typography>
        </Box>
      </CardContent>
    </CustomCardCountry>
  );
};

export default CardCountries;

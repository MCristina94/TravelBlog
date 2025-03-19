import React from "react";
import { Box, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { CustomCard } from "./styles";
import MoneyIcon from "@mui/icons-material/Money";
import LanguageIcon from "@mui/icons-material/Language";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const TravelCard = ({
  height,
  width,
  margin,
  city,
  photo,
  lenguage,
  coin,
  timeZone,
  infoCity,
  ...rest
}) => {
  return (
    <CustomCard height={height} width={width} {...rest}>
      <CardMedia sx={{ height: "250px" }} image={photo} title="city photo" />
      <CardContent>
        <Typography variant="h4" sx={{ marginBottom: "5px" }}>
          {city}
        </Typography>
        <Box
          sx={{
            marginY: "10px",
          }}
        >
          <Chip
            icon={<QueryBuilderIcon />}
            label={timeZone}
            sx={{ marginRight: "5px" }}
          />
          <Chip
            icon={<LanguageIcon />}
            label={lenguage}
            sx={{ marginRight: "5px" }}
          />
          <Chip icon={<MoneyIcon />} label={coin} sx={{ marginRight: "5px" }} />
        </Box>
        <Typography variant="sm">{infoCity}</Typography>
      </CardContent>
    </CustomCard>
  );
};

export default TravelCard;

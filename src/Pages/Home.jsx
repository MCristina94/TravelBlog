import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TravelCard from "../Components/Card/TravelCard";
import data from "../utils/Data.json";
const Home = () => {
  const cities = data.cities;
  console.log(cities);
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
        {cities.slice(0, 2).map((city, index) => (
          <TravelCard
            key={city.id}
            city={city.ciudad}
            photo={city.foto}
            infoCity={city.informacion}
            coin={city.moneda}
            lenguage={city.idioma}
            timeZone={city.zonaHoraria}
            height="500px"
            width="49%"
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {cities.slice(2, 5).map((city) => (
          <TravelCard
            key={city.id}
            city={city.ciudad}
            photo={city.foto}
            infoCity={city.informacion}
            coin={city.moneda}
            lenguage={city.idioma}
            timeZone={city.zonaHoraria}
            height="500px"
            width="33%"
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginY: "20px",
        }}
      >
        {cities.slice(5, 7).map((city) => (
          <TravelCard
            key={city.id}
            city={city.ciudad}
            photo={city.foto}
            infoCity={city.informacion}
            coin={city.moneda}
            lenguage={city.idioma}
            timeZone={city.zonaHoraria}
            height="500px"
            width="49%"
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {cities.slice(7, 10).map((city) => (
          <TravelCard
            key={city.id}
            city={city.ciudad}
            photo={city.foto}
            infoCity={city.informacion}
            coin={city.moneda}
            lenguage={city.idioma}
            timeZone={city.zonaHoraria}
            height="500px"
            width="33%"
          />
        ))}
      </Box>
    </Box>
  );
};

export default Home;

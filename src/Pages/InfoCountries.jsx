import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCountries from "../Components/CardCountries/CardCountries";
import SkeletonInfoCountries from "../Components/SkeletonInfoCountries/SkeletonInfoCountries";

const InfoCountries = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countrieSearch, setCountrieSearch] = useState("");
  const [searchedCountrie, setSearchedCountrie] = useState({});

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      if (res.data.length > 0) {
        const firstTen = res.data.slice(0, 12);
        setCountriesData(firstTen);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  console.log(countriesData);

  return (
    <Box
      sx={{
        width: "80%",
        margin: "0 auto",
        paddingTop: "80px",
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: "30px" }}>
        General Information about countries
      </Typography>

      {countriesData.length > 0 && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          {loading ? (
            <SkeletonInfoCountries />
          ) : (
            countriesData.map((country, index) => (
              <CardCountries
                key={index}
                nameCountry={country.name.common}
                flag={country.flags.svg}
                capital={country.capital ? country.capital[0] : "No info"}
                continent={country.continents[0]}
                timeZone={country.timezones}
                locationMap={country.maps.googleMaps}
                demonym={
                  country.demonyms?.eng
                    ? `${country.demonyms.eng.m} / ${country.demonyms.eng.f}`
                    : "No info"
                }
                languages={
                  country.languages
                    ? Object.values(country.languages).join(", ")
                    : "No info"
                }
                height="500px"
                width="300px"
              />
            ))
          )}
        </Box>
      )}
    </Box>
  );
};

export default InfoCountries;

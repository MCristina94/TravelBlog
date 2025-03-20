import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCountries from "../Components/CardCountries/CardCountries";
import SkeletonInfoCountries from "../Components/SkeletonInfoCountries/SkeletonInfoCountries";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";

const InfoCountries = () => {
  const themeQuery = useTheme();
  const isMobile = useMediaQuery(themeQuery.breakpoints.down("sm"));
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchedCountrie, setSearchedCountrie] = useState([]);
  const typeSearch = [
    { value: "lang", label: "Languages" },
    { value: "name", label: "Name of the country" },
    { value: "currency", label: "Currency" },
    {
      value: "capital",
      label: "Capital City",
    },
  ];
  const [selectedOption, setSelectedOption] = useState("lang");
  const [description, setDescription] = useState("");

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

  const fetchCountriesSearch = async () => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/${selectedOption}/${description}`
      );
      if (res.data.length > 0) {
        const firstTen = res.data.slice(0, 12);
        setSearchedCountrie(firstTen);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    console.log("Option selected:", selectedOption);
    console.log("Description:", description);

    fetchCountriesSearch();
  };

  console.log(searchedCountrie);

  return (
    <>
      {isMobile ? (
        <Box
          sx={{
            width: "80%",
            margin: "0 auto",
            paddingTop: "80px",
          }}
        >
          <Typography variant="h2" sx={{ marginBottom: "30px" }}>
            Countries
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginY: "20px",
            }}
          >
            <Typography variant="h6">
              You can search for information on countries of interest to you.
            </Typography>
            <Typography variant="xs">
              Choose an option for the search, and input the name to that
              option.
            </Typography>
            <Paper
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "90%",
                p: "10px 20px",
                mx: "auto",
                my: "20px",
                gap: 2,
              }}
            >
              <TextField
                id="searcheOptions"
                select
                label="Options to search"
                defaultValue="lang"
                helperText="Choose an option and "
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                sx={{ width: "100%" }}
              >
                {typeSearch.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                id="descriptionForSearch"
                label="Describe for search"
                helperText="Describes the keyword for the search"
                placeholder="Example: spanish"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ width: "100%" }}
              />
              <Button
                endIcon={<SearchIcon />}
                variant="outlined"
                onClick={handleSearch}
              >
                Search
              </Button>
            </Paper>
          </Box>
          {searchedCountrie.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 3,
              }}
            >
              {loading ? (
                <SkeletonInfoCountries />
              ) : (
                searchedCountrie.map((country, index) => (
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
                    width="100%"
                  />
                ))
              )}
            </Box>
          )}
          {searchedCountrie.length > 0 ? (
            <Box />
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
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
                    width="100%"
                  />
                ))
              )}
            </Box>
          )}
        </Box>
      ) : (
        <Box
          sx={{
            width: "80%",
            margin: "0 auto",
            paddingTop: "80px",
          }}
        >
          <Typography variant="h2" sx={{ marginBottom: "30px" }}>
            General information about countries
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginY: "20px",
            }}
          >
            <Typography variant="h6">
              You can search for information on countries of interest to you.
            </Typography>
            <Typography variant="xs">
              Choose an option for the search, and input the name to that
              option.
            </Typography>
            <Paper
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 400,
                p: "10px 20px",
                mx: "auto",
                my: "20px",
                gap: 2,
              }}
            >
              <TextField
                id="searcheOptions"
                select
                label="Options to search"
                defaultValue="lang"
                helperText="Choose an option and "
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                sx={{ width: "100%" }}
              >
                {typeSearch.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                id="descriptionForSearch"
                label="Describe for search"
                helperText="Describes the keyword for the search"
                placeholder="Example: spanish"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ width: "100%" }}
              />
              <Button
                endIcon={<SearchIcon />}
                variant="outlined"
                onClick={handleSearch}
              >
                Search
              </Button>
            </Paper>
            {searchedCountrie.length > 0 && (
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
                  searchedCountrie.map((country, index) => (
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
          {searchedCountrie.length > 0 && (
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
                searchedCountrie.map((country, index) => (
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
          {searchedCountrie.length > 0 ? (
            <Box />
          ) : (
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
      )}
    </>
  );
};

export default InfoCountries;

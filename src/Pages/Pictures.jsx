import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SkeletonPicture from "../Components/SkeletonPicture/SkeletonPicture";
import SearchIcon from "@mui/icons-material/Search";

const Pictures = () => {
  const cities = [
    "Prague",
    "Rome",
    "Tokyo",
    "New York",
    "London",
    "Madrid",
    "Berlin",
    "Venice",
    "Barcelone",
    "Florence",
    "Vienna",
    "Seoul",
    "Zurich",
  ];
  const [photosData, setPhotosData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placeSearch, setPlaceSearch] = useState("");
  const [allSearchedPlace, setAllSearchedPlace] = useState([]);

  const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const allPhotos = [];

    for (let city of cities) {
      try {
        const res = await axios.get(`https://api.pexels.com/v1/search`, {
          headers: {
            Authorization: API_KEY,
          },
          params: {
            query: city,
            per_page: 1,
          },
        });
        if (res.data.photos.length > 0) {
          allPhotos.push({
            city,
            photoUrl: res.data.photos[0].src.large,
          });
        }
      } catch (err) {
        console.error(err);
      }
    }

    setPhotosData(allPhotos);
    setLoading(false);
  };

  const fetchPhotoSearch = async () => {
    const searchedPhotos = [];
    try {
      const res = await axios.get(`https://api.pexels.com/v1/search`, {
        headers: {
          Authorization: API_KEY,
        },
        params: {
          query: `city of ${placeSearch}`,
          per_page: 10,
        },
      });
      if (res.data.photos.length > 0) {
        res.data.photos.forEach((photo) => {
          searchedPhotos.push({
            placeSearch,
            photoUrl: photo.src.large,
          });
        });
      }
    } catch (err) {
      console.error(err);
    }
    setAllSearchedPlace(searchedPhotos);
    setLoading(false);
  };

  const handleInputChange = (event) => {
    setPlaceSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPhotoSearch();
  };

  return (
    <Box sx={{ width: "80%", margin: "0 auto", paddingTop: "80px" }}>
      <Typography variant="h2" sx={{ marginY: "20px" }}>
        Photo Gallery
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginY: "20px",
        }}
      >
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            alignItems: "center",
            width: 400,
            p: "2px 20px",
            mx: "auto",
          }}
        >
          <InputBase
            sx={{ width: "90%" }}
            placeholder="Search pictures"
            value={placeSearch}
            onChange={handleInputChange}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Typography variant="h6">
          You can search pictures of different countries or cities.
        </Typography>
        <Typography variant="xs">
          In results you will see photos of trips to in that place.
        </Typography>
      </Box>

      {allSearchedPlace.length > 0 && (
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={2}
          mt={4}
        >
          {loading ? (
            <SkeletonPicture />
          ) : (
            allSearchedPlace.map((photo, index) => (
              <Box key={index} p={1}>
                <img
                  src={photo.photoUrl}
                  alt={photo.placeSearch}
                  style={{
                    width: "auto",
                    height: "300px",
                  }}
                />
              </Box>
            ))
          )}
        </Box>
      )}

      {allSearchedPlace.length > 0 ? (
        <Box />
      ) : (
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
          {loading ? (
            <SkeletonPicture />
          ) : (
            photosData.map((photo, index) => (
              <Box key={index} p={1}>
                <img
                  src={photo.photoUrl}
                  alt={photo.city}
                  style={{
                    width: "auto",
                    height: "300px",
                  }}
                />
              </Box>
            ))
          )}
        </Box>
      )}
    </Box>
  );
};

export default Pictures;

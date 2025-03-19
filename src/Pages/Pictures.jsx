import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SkeletonPicture from "../Components/SkeletonPicture/SkeletonPicture";

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
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  useEffect(() => {
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

    fetchPhotos();
  }, []);

  return (
    <Box sx={{ width: "80%", margin: "0 auto", paddingTop: "80px" }}>
      <Typography variant="h2" sx={{ marginY: "20px" }}>
        Photo Gallery
      </Typography>
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
    </Box>
  );
};

export default Pictures;

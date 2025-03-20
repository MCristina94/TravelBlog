import React from "react";
import { CustomSkeletonInfoCountries } from "./styles";
import { Box, Skeleton } from "@mui/material";

const SkeletonInfoCountries = () => {
  return (
    <CustomSkeletonInfoCountries>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={5}
        justifyContent="space-between"
      >
        {[...Array(12)].map((_, index) => (
          <Box key={index}>
            <Skeleton variant="rectangular" width={330} height={200} />
            <Skeleton width={330} />
            <Skeleton width={200} />
          </Box>
        ))}
      </Box>
    </CustomSkeletonInfoCountries>
  );
};

export default SkeletonInfoCountries;

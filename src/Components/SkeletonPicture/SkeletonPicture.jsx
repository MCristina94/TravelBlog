import React from "react";
import { CustomSkeleton } from "./styles";
import { theme } from "../../style/theme";
import { Box, Skeleton } from "@mui/material";

const SkeletonPicture = () => {
  return (
    <CustomSkeleton>
      <Box
        sx={{
          display: "flex",
          flexDirectio: "row",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <Skeleton
          variant="rectangular"
          width="450px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="450px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirectio: "row",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <Skeleton
          variant="rectangular"
          width="450px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="200px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="450px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirectio: "row",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <Skeleton
          variant="rectangular"
          width="450px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="450px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="150px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirectio: "row",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <Skeleton
          variant="rectangular"
          width="200px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="450px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="200px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirectio: "row",
          gap: 3,
          justifyContent: "center",
        }}
      >
        <Skeleton
          variant="rectangular"
          width="450px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
        <Skeleton
          variant="rectangular"
          width="450px"
          height="300px"
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.colors.neutralGray200,
          }}
        />
      </Box>
    </CustomSkeleton>
  );
};

export default SkeletonPicture;

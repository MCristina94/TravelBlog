import {
  Box,
  Container,
  Typography,
  Divider,
  Paper,
  Stack,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import FlagIcon from "@mui/icons-material/Flag";
import { theme } from "../style/theme";
import { useTheme } from "@emotion/react";

const AboutPage = () => {
  const themeQuery = useTheme();
  const isMobile = useMediaQuery(themeQuery.breakpoints.down("sm"));
  return (
    <>
      {isMobile ? (
        <Container maxWidth="xs" sx={{ paddingTop: 10 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom>
              About This Page
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Typography variant="body1" mb={3}>
              Welcome to my personal travel blog project! This website was
              created as a way to showcase my skills in front-end development,
              specifically using{" "}
              <Box component="span" color="primary.main" fontWeight="bold">
                React
              </Box>{" "}
              and{" "}
              <Box component="span" color="primary.main" fontWeight="bold">
                Material UI
              </Box>
              . It's more than just a simple blog—it's an interactive platform
              where I combine design, functionality, and real-time data to
              create an engaging user experience.
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <PublicIcon sx={{ color: theme.colors.alernateGreen }} />
              <Typography variant="h6">Travel Destinations</Typography>
            </Stack>
            <Typography variant="body1" mb={3}>
              A collection of my favorite destinations, where I share why I
              personally enjoy each place. For every destination, you'll find
              useful information like time zone, currency, language, and
              interesting photos.
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <PhotoLibraryIcon sx={{ color: theme.colors.alernateGreen }} />
              <Typography variant="h6">
                Photo Gallery with Search Feature
              </Typography>
            </Stack>
            <Typography variant="body1" mb={3}>
              There’s also a dedicated route where you'll see a gallery of{" "}
              <Box component="span" fontWeight="bold">
                random travel-related photos
              </Box>
              . Additionally, I’ve integrated a search bar powered by the{" "}
              <Box component="span" color="primary.main" fontWeight="bold">
                Pexels API
              </Box>
              , so users can type the name of any destination and instantly view
              beautiful images related to their search.
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <FlagIcon sx={{ color: theme.colors.alernateGreen }} />
              <Typography variant="h6">Countries Info Section</Typography>
            </Stack>
            <Typography variant="body1" mb={3}>
              In another section, you’ll find a set of cards displaying
              information about various countries. The data is fetched
              dynamically from the{" "}
              <Box component="span" color="primary.main" fontWeight="bold">
                REST Countries API
              </Box>
              . Each card includes the country’s flag, currency, language,
              capital city, and a direct link to view the location on{" "}
              <Box component="span" color="primary.main" fontWeight="bold">
                Google Maps
              </Box>
              . You can also perform searches based on currency, capital city,
              country name, or language.
            </Typography>

            <Typography variant="body1">
              This project reflects my passion for front-end development and
              user interface design, as well as my interest in exploring new
              places. I hope you enjoy navigating through it as much as I
              enjoyed building it!
            </Typography>
          </Paper>
        </Container>
      ) : (
        <Container maxWidth="md" sx={{ paddingTop: 10 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="h4" gutterBottom>
              About This Page
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Typography variant="body1" mb={3}>
              Welcome to my personal travel blog project! This website was
              created as a way to showcase my skills in front-end development,
              specifically using{" "}
              <Box component="span" color="primary.main" fontWeight="bold">
                React
              </Box>{" "}
              and{" "}
              <Box component="span" color="primary.main" fontWeight="bold">
                Material UI
              </Box>
              . It's more than just a simple blog—it's an interactive platform
              where I combine design, functionality, and real-time data to
              create an engaging user experience.
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <PublicIcon sx={{ color: theme.colors.alernateGreen }} />
              <Typography variant="h6">Travel Destinations</Typography>
            </Stack>
            <Typography variant="body1" mb={3}>
              A collection of my favorite destinations, where I share why I
              personally enjoy each place. For every destination, you'll find
              useful information like time zone, currency, language, and
              interesting photos.
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <PhotoLibraryIcon sx={{ color: theme.colors.alernateGreen }} />
              <Typography variant="h6">
                Photo Gallery with Search Feature
              </Typography>
            </Stack>
            <Typography variant="body1" mb={3}>
              There’s also a dedicated route where you'll see a gallery of{" "}
              <Box component="span" fontWeight="bold">
                random travel-related photos
              </Box>
              . Additionally, I’ve integrated a search bar powered by the{" "}
              <Box component="span" color="primary.main" fontWeight="bold">
                Pexels API
              </Box>
              , so users can type the name of any destination and instantly view
              beautiful images related to their search.
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <FlagIcon sx={{ color: theme.colors.alernateGreen }} />
              <Typography variant="h6">Countries Info Section</Typography>
            </Stack>
            <Typography variant="body1" mb={3}>
              In another section, you’ll find a set of cards displaying
              information about various countries. The data is fetched
              dynamically from the{" "}
              <Box component="span" color="primary.main" fontWeight="bold">
                REST Countries API
              </Box>
              . Each card includes the country’s flag, currency, language,
              capital city, and a direct link to view the location on{" "}
              <Box component="span" color="primary.main" fontWeight="bold">
                Google Maps
              </Box>
              . You can also perform searches based on currency, capital city,
              country name, or language.
            </Typography>

            <Typography variant="body1">
              This project reflects my passion for front-end development and
              user interface design, as well as my interest in exploring new
              places. I hope you enjoy navigating through it as much as I
              enjoyed building it!
            </Typography>
          </Paper>
        </Container>
      )}
    </>
  );
};

export default AboutPage;

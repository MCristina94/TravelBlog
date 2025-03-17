import { createTheme, ThemeProvider } from "@mui/material";
import AppAppBar from "./Components/AppBar";
import { theme } from "./style/theme";

function App() {
  const themeMUI = createTheme({
    typography: {
      fontFamily: "Quicksand, sans-serif",
      xs: {
        fontSize: theme.fonts.size.xs,
      },
      sm: {
        fontSize: theme.fonts.size.sm,
        fontWeight: theme.fonts.weight.light,
      },
      regular: {
        fontSize: theme.fonts.size.regular,
      },
      h6: {
        fontSize: theme.fonts.size.default,
        fontWeight: theme.fonts.weight.light,
      },
      h5: {
        fontSize: theme.fonts.size.default,
        fontWeight: theme.fonts.weight.medium,
      },
      h4: {
        fontSize: theme.fonts.size.h4,
        fontWeight: theme.fonts.weight.medium,
      },
      h3: {
        fontSize: theme.fonts.size.h3,
        fontWeight: theme.fonts.weight.medium,
      },
      h2: {
        fontSize: theme.fonts.size.h2,
        fontWeight: theme.fonts.weight.medium,
      },
      h1: {
        fontSize: theme.fonts.size.h1,
        fontWeight: theme.fonts.weight.medium,
      },
      title: {
        fontSize: theme.fonts.size.h1,
        fontWeight: theme.fonts.weight.bold,
      },
      label: {
        fontSize: theme.fonts.size.sm,
        fontWeight: theme.fonts.weight.light,
      },
      button: {
        fontFamily: theme.fonts.family.primary,
        fontSize: theme.fonts.size.default,
      },
      link: {
        fontFamily: theme.fonts.family.primary,
        fontSize: theme.fonts.size.regular,
        fontWeight: theme.fonts.weight.light,
      },
      link2: {
        fontFamily: theme.fonts.family.primary,
        fontSize: theme.fonts.size.regular,
      },
      linksm: {
        fontFamily: theme.fonts.family.primary,
        fontSize: theme.fonts.size.xs,
        fontWeight: theme.fonts.weight.bold,
      },
      error: {
        fontFamily: theme.fonts.family.primary,
        fontSize: theme.fonts.size.xs,
        fontWeight: theme.fonts.weight.regular,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={themeMUI}>
        <AppAppBar />
      </ThemeProvider>
    </>
  );
}

export default App;

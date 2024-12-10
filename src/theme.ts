import { createTheme, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function Theme() {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const primaryColor = grey[500];

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",

      primary: {
        main: primaryColor,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? "#333" : `${grey[200]}`,
          },
        },
      },
    },

    typography: {
      fontFamily: ["DotGothic16", "Noto Sans JP"].join(","),
      fontSize: 16,
    },
  });

  return theme;
}

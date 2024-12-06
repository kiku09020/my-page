import { createTheme, useMediaQuery } from "@mui/material";

export default function Theme() {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
    typography: {
      fontFamily: ["DotGothic16", "Noto Sans JP"].join(","),
      fontSize: 16,
    },
  });

  return theme;
}

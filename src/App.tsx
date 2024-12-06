import { Outlet } from "react-router-dom";
import Scaffold from "./features/scaffold/scaffold";
import { SWRConfig } from "swr";
import contentfulFetcher from "./features/contentful/contentful-fetcher";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme()}>
        <CssBaseline />
        <Scaffold>
          <SWRConfig
            value={{
              fetcher: contentfulFetcher(),
            }}
          >
            <Outlet />
          </SWRConfig>
        </Scaffold>
      </ThemeProvider>
    </>
  );
}

export default App;

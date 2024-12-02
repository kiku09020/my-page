import { Outlet } from "react-router-dom";
import "./App.css";
import Scaffold from "./features/scaffold/scaffold";
import { SWRConfig } from "swr";
import contentfulFetcher from "./features/contentful/contentful-fetcher";

function App() {
  return (
    <>
      <Scaffold>
        <SWRConfig
          value={{
            fetcher: contentfulFetcher(),
          }}
        >
          <Outlet />
        </SWRConfig>
      </Scaffold>
    </>
  );
}

export default App;

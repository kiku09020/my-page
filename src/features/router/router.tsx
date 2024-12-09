import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { routes } from "./route-model";
import Page from "../../components/Page";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: routes.map((route) => ({
        path: route.path,
        element: <Page title={route.linkName}>{route.element}</Page>,
      })),
    },
  ]);

  return router;
}

import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { routes } from "./route-model";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: routes.map((route) => ({
        path: route.path,
        element: route.element,
      })),
    },
  ]);

  return router;
}

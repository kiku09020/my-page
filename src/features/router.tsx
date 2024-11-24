import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Profile from "../pages/profile/profile";
import App from "../App";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return router;
}

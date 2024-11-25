import Home from "../../pages/home/home";
import Profile from "../../pages/profile/profile";

type Route = {
  path: string;
  linkName: string;
  element: React.ReactNode;
};

export const routes: Route[] = [
  {
    path: "/",
    linkName: "Home",
    element: <Home />,
  },
  {
    path: "/profile",
    linkName: "Profile",
    element: <Profile />,
  },
];

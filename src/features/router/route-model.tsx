import Contact from "../../pages/contact/contact";
import Home from "../../pages/home/home";
import Products from "../../pages/products/products";
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

  {
    path: "/products",
    linkName: "Products",
    element: <Products />,
  },
  {
    path: "/contact",
    linkName: "Contact",
    element: <Contact />,
  },
];

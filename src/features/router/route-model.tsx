import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products";
import Profile from "../../pages/profile/Profile";

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

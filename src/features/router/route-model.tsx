import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Products from "../../pages/products/Products";
import Profile from "../../pages/profile/Profile";

type Route = {
  path: string;
  linkName: string;
  element: React.ReactNode;
  hashLinks?: string[];
};

export const routes: Route[] = [
  {
    path: "/",
    linkName: "Home",
    element: <Home />,
    hashLinks: ["links"],
  },
  {
    path: "/profile",
    linkName: "Profile",
    element: <Profile />,
    hashLinks: ["skills"],
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

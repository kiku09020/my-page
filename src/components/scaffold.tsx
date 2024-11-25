import { AppBar, Box, Toolbar } from "@mui/material";
import { DrawerProvider } from "../features/drawer/useDrawer";
import { DrawerToggleButton, NavigationDrawer } from "../features/drawer/drawer";
import { routes } from "../features/router/route-model";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function Scaffold({ children }: Props) {
  const drawerWidth = 240;

  return (
    <Box>
      <DrawerProvider>
        {/* AppBar */}
        <AppBar sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
          <Toolbar>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <DrawerToggleButton />
            </Box>
            <h2>App</h2>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Box>
          <NavigationDrawer width={drawerWidth}>
            <ul>
              {routes.map((route) => (
                <li key={route.path}>
                  <Link to={route.path}>{route.linkName}</Link>
                </li>
              ))}
            </ul>
          </NavigationDrawer>
        </Box>
      </DrawerProvider>

      {/* Contents */}
      <Box>{children}</Box>
    </Box>
  );
}

import { AppBar, Box, Toolbar } from "@mui/material";
import { DrawerProvider } from "../drawer/useDrawer";
import { DrawerToggleButton, NavigationDrawer } from "../drawer/drawer";
import { routes } from "../router/route-model";
import { Link } from "@mui/material";

import { appInfo } from "./app-model";

type Props = {
  children: React.ReactNode;
};

export default function Scaffold({ children }: Props) {
  const drawerWidth = 240;

  return (
    <DrawerProvider>
      <Box sx={{ display: "flex" }}>
        {/* AppBar */}
        <AppBar
          sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
        >
          <Toolbar>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <DrawerToggleButton />
            </Box>
            <Link
              className="hover:animate-vibrate-3 hover:text-white hover:font-bold"
              href="/"
              variant="inherit"
              color="textPrimary"
              underline="none"
            >
              {appInfo.title}
            </Link>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <NavigationDrawer width={drawerWidth}>
          <img
            src={appInfo.logo}
            width={64}
            className="mx-auto max-w-md hover:animate-jello-vertical"
          />
          <ul>
            {routes.map((route) => (
              <li key={route.path}>
                <Link href={route.path}>{route.linkName}</Link>
              </li>
            ))}
          </ul>
        </NavigationDrawer>

        {/* Contents */}
        <Box
          sx={{
            width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}` },
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </DrawerProvider>
  );
}

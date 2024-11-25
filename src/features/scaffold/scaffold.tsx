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
      <Box>
        {/* AppBar */}
        <AppBar sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
          <Toolbar>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <DrawerToggleButton />
            </Box>
            <Link href="/" variant="inherit" color="textPrimary" underline="none">
              {appInfo.title}
            </Link>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Box>
          <NavigationDrawer width={drawerWidth}>
            <img src={appInfo.logo} width={64} className="mx-auto max-w-md" />
            <ul>
              {routes.map((route) => (
                <li key={route.path}>
                  <Link href={route.path}>{route.linkName}</Link>
                </li>
              ))}
            </ul>
          </NavigationDrawer>
        </Box>

        {/* Contents */}
        <Box>{children}</Box>
      </Box>
    </DrawerProvider>
  );
}

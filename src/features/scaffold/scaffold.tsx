import { AppBar, Box, Toolbar } from "@mui/material";
import { DrawerProvider } from "../drawer/useDrawer";
import { DrawerToggleButton, NavigationDrawer } from "../drawer/drawer";

import { Link } from "@mui/material";

import { appInfo } from "./app-model";

type Props = {
  children: React.ReactNode;
};

export default function Scaffold({ children }: Props) {
  const drawerWidth = 240;

  //------------------------------------------------------------

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
        <NavigationDrawer logo={appInfo.logo} width={drawerWidth}></NavigationDrawer>

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

import { AppBar, Box, Toolbar } from "@mui/material";
import { DrawerProvider } from "../features/drawer/useDrawer";
import { DrawerToggleButton, NavigationDrawer } from "../features/drawer/drawer";

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
            <h1>App</h1>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Box>
          <NavigationDrawer width={drawerWidth}>
            <ul>
              <li>Menu1</li>
              <li>Menu2</li>
              <li>Menu3</li>
            </ul>
          </NavigationDrawer>
        </Box>
      </DrawerProvider>

      {/* Contents */}
      <Box>{children}</Box>
    </Box>
  );
}

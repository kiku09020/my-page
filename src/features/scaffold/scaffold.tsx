import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import { DrawerProvider } from "../drawer/useDrawer";
import { DrawerToggleButton, NavigationDrawer } from "../drawer/drawer";
import { routes } from "../router/route-model";
import { Link } from "@mui/material";
import { HashLink } from "react-router-hash-link";

import { appInfo } from "./app-model";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function Scaffold({ children }: Props) {
  const drawerWidth = 240;

  const getIsCurrentRoute = (path: string) => {
    return useLocation().pathname === path;
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -64;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

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
        <NavigationDrawer width={drawerWidth}>
          <img
            src={appInfo.logo}
            width={64}
            className="mx-auto max-w-md hover:animate-jello-vertical"
          />
          <Box display={"flex"} flexDirection={"column"} sx={{ pl: 2 }}>
            {routes.map((route) => {
              const isCurrentRoute = getIsCurrentRoute(route.path);

              return (
                <>
                  <Box display={"flex"} flexDirection={"row"}>
                    {/* ページリンク */}
                    <Link
                      key={route.path}
                      href={route.path}
                      fontWeight={isCurrentRoute ? "bold" : "normal"}
                    >
                      {route.linkName}
                    </Link>
                    {/* 現在のページの目印フラミンゴ */}
                    {isCurrentRoute && <Typography sx={{ userSelect: "none" }}>🦩</Typography>}
                  </Box>
                  {/* 現在のページ内のハッシュリンク一覧 */}
                  {isCurrentRoute && route.hashLinks && (
                    <Stack>
                      {route.hashLinks?.map((hashLink) => (
                        <Link>
                          <HashLink
                            to={`#${hashLink}`}
                            scroll={scrollWithOffset}
                            style={{ paddingLeft: 16 }}
                          >
                            {hashLink.charAt(0).toUpperCase() + hashLink.slice(1)}
                          </HashLink>
                        </Link>
                      ))}
                    </Stack>
                  )}
                </>
              );
            })}
          </Box>
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

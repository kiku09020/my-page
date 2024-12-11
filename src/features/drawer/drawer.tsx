import { Box, Drawer, IconButton, Link, Stack, SwipeableDrawer, Typography } from "@mui/material";
import { useDrawer } from "./useDrawer";
import { Menu } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import { routes } from "../router/route-model";
import { HashLink } from "react-router-hash-link";

type DrawerProps = {
  logo: string;
  width?: number;
};

export function NavigationDrawer({ logo, width }: DrawerProps) {
  const { isOpen, setIsOpen } = useDrawer();

  const getIsCurrentRoute = (path: string) => {
    return useLocation().pathname === path;
  };

  const scrollWithOffset = (el: Element) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -64;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  //------------------------------------------------------------

  const drawerContent = (
    <>
      <Box
        component={"img"}
        src={logo}
        width={64}
        className="mx-auto max-w-md hover:animate-jello-vertical"
      />
      <Box display={"flex"} flexDirection={"column"} sx={{ pl: 2 }}>
        {routes.map((route) => {
          const isCurrentRoute = getIsCurrentRoute(route.path);

          return (
            <Box key={route.linkName}>
              <Box display={"flex"} flexDirection={"row"}>
                {/* ページリンク */}
                <Link
                  key={route.path}
                  href={`/my-page/#/${route.path}`}
                  fontWeight={isCurrentRoute ? "bold" : "normal"}
                  fontSize={24}
                >
                  {route.linkName}
                </Link>
                {/* 現在のページの目印フラミンゴ */}
                {isCurrentRoute && (
                  <Typography fontSize={24} sx={{ userSelect: "none" }}>
                    🦩
                  </Typography>
                )}
              </Box>
              {/* 現在のページ内のハッシュリンク一覧 */}
              {isCurrentRoute && route.hashLinks && (
                <Stack>
                  {route.hashLinks?.map((hashLink) => (
                    <Box key={hashLink}>
                      <HashLink
                        to={`#${hashLink}`}
                        scroll={scrollWithOffset}
                        style={{ paddingLeft: 16, textDecoration: "underline" }}
                      >
                        {hashLink.charAt(0).toUpperCase() + hashLink.slice(1)}
                      </HashLink>
                    </Box>
                  ))}
                </Stack>
              )}
            </Box>
          );
        })}
      </Box>
    </>
  );

  return (
    <Box component="nav" sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}>
      {/* モバイル用 */}
      <SwipeableDrawer
        variant="temporary"
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { width: width } }}
      >
        {drawerContent}
      </SwipeableDrawer>

      {/* デスクトップ用 */}
      <Drawer
        variant="permanent"
        open={true}
        sx={{ display: { xs: "none", sm: "block" }, "& .MuiDrawer-paper": { width: width } }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}

export function DrawerToggleButton() {
  const { isOpen, setIsOpen } = useDrawer();

  return (
    <>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </IconButton>
    </>
  );
}

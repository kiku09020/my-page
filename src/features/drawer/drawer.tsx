import { Button, Drawer, IconButton, SwipeableDrawer } from "@mui/material";
import { useDrawer } from "./useDrawer";
import { Menu } from "@mui/icons-material";

type DrawerProps = {
  children: React.ReactNode;
  width?: number;
};

export function NavigationDrawer({ children, width }: DrawerProps) {
  const { isOpen, setIsOpen } = useDrawer();

  return (
    <>
      {/* モバイル用 */}
      <SwipeableDrawer
        variant="temporary"
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { width: width } }}
      >
        {children}
      </SwipeableDrawer>

      {/* デスクトップ用 */}
      <Drawer
        variant="permanent"
        open={true}
        sx={{ display: { xs: "none", sm: "block" }, "& .MuiDrawer-paper": { width: width } }}
      >
        {children}
      </Drawer>
    </>
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

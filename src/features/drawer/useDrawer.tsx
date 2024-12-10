import { createContext, useContext, useState, ReactNode } from "react";

const DrawerContext = createContext({
  isOpen: false,
  setIsOpen: (_isOpen: boolean) => {},
});

export function useDrawer() {
  return useContext(DrawerContext);
}

type DrawerProviderProps = {
  children: ReactNode;
};

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return <DrawerContext.Provider value={{ isOpen, setIsOpen }}>{children}</DrawerContext.Provider>;
}

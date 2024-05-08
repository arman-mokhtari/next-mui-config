"use client";

import { ReactNode } from "react";
import { MenuRounded } from "@mui/icons-material";
import { Box, Divider, Drawer, Fab } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import TabItems from "./TabItems";
import SidebarSocial from "./SidebarSocial";

const drawerWidth = 300;

export default function Sidebar({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const theme = useTheme();

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
        borderRight: "2px solid",
        borderColor: theme.palette.mode === "dark" ? "#2e344e" : "#cbced8",
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(25, 29, 43, 0.7)"
            : "rgba(228, 228, 228, 0.7)",
      }}
    >
      <Box>
        <SidebarHeader />
        <Divider />
        <TabItems />
      </Box>
      <Box>
        <Divider />
        <SidebarSocial />
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Fab
        aria-label="open drawer"
        size="small"
        sx={{
          backgroundColor: "rgba(189, 189, 189, 0.8);",
          backdropFilter: "blur(1.5px)",
          position: "absolute",
          left: 10,
          top: 10,
          display: { md: "none" },
        }}
        onClick={handleDrawerToggle}
      >
        <MenuRounded />
      </Fab>

      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
          "& .MuiDivider-root": {
            borderColor: theme.palette.mode === "dark" ? "#2e344e" : "#cbced8",
          },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "none",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

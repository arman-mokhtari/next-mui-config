"use client";

import { ColorModeContext } from "@/context/themeContext";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "@/theme";
import ToggleColor from "./ToggleColorMode";
import Sidebar from "./sidebar/Sidebar";

const LayoutMC = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <AppRouterCacheProvider>
      <ColorModeContext.Provider
        value={{
          toggleColorMode,
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToggleColor />
          <Sidebar>
            {children}
            </Sidebar>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </AppRouterCacheProvider>
  );
};

export default LayoutMC;

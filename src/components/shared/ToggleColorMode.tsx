"use client";
import { useContext } from "react";

import { useTheme } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";
import { ColorModeContext } from "@/context/themeContext";

interface Props {
  xs?: string;
}

const ThemeBtn = ({ xs }: Props) => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: {
          xs: xs,
        },
      }}
    >
      <IconButton
        aria-label="ThemeChanger"
        sx={{
          "&.MuiButtonBase-root:hover": {
            backgroundColor: "transparent",
          },
          border: "2px solid",
          borderRadius: 2,
          padding: "5px",
          color: "inherit",
        }}
        onClick={toggleColorMode}
      >
        {theme.palette.mode === "dark" ? (
          <WbSunnyOutlined />
        ) : (
          <NightlightOutlined />
        )}
      </IconButton>
    </Box>
  );
};

export default ThemeBtn;

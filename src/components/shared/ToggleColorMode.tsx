"use client";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Fab, IconButton } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";
import { ColorModeContext } from "@/context/themeContext";

const ToggleColor = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        position: "absolute",
        right: 10,
        top:10
      }}
    >
      <Fab
        aria-label="toggle color"
        variant="extended"
        size="small"
        color="secondary"
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(170, 71, 188, 0.7)"
              : "rgba(206, 147, 216, 0.7)",
          backdropFilter: "blur(1px)",
        }}
        onClick={toggleColorMode}
      >
        {theme.palette.mode === "dark" ? "light" : "dark"}
        {theme.palette.mode === "dark" ? (
          <WbSunnyOutlined
            sx={{
              ml: 0.5,
            }}
          />
        ) : (
          <NightlightOutlined
            sx={{
              ml: 0.5,
            }}
          />
        )}
      </Fab>
    </Box>
  );
};

export default ToggleColor;

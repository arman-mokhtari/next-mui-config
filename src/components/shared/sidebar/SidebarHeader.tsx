"use client";

import CustomAvatar from "@/components/common/CustomAvatar";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SidebarHeader = () => {
  const theme = useTheme();
  return (
    <Stack
      my={1}
      alignItems="center"
      sx={{
        color:
          theme.palette.mode === "dark" ? "text.primary" : "text.secondary",
      }}
    >
      <CustomAvatar />

      <Typography
        sx={{
          fontWeight: "500",
          mt: 0.5,
        }}
        noWrap
      >
        Arman Mokhtari
      </Typography>
      <Typography
        noWrap
        sx={{
          fontSize: "0.85rem",
        }}
        variant="caption"
      >
        I am a full-stack web developer.
      </Typography>
    </Stack>
  );
};
export default SidebarHeader;

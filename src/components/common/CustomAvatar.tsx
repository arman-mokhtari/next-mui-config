import { Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CustomAvatar = () => {
  const theme = useTheme();
  const avatar = "https://cdn.workfolio.ir/images/admin/arman_mokhtari.png";
  return (
    <Avatar
      src={avatar}
      alt="Arman Mokhtari"
      sx={{
        height: 120,
        width: 120,
        border: "7px solid",
        borderColor: theme.palette.mode === "dark" ? "#2e344e" : "#cbced8",
        "&:hover": {
          borderColor: "#037fff",
        },
      }}
    />
  );
};

export default CustomAvatar;

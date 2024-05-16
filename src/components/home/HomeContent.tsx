import { getAdmin } from "@/backend/libs/actions/user.action";
import TextTyped from "./TextAnimate";
import { Box, Button, Stack, Typography } from "@mui/material";
// import HomeSkeleton from "./HomeSkeleton";

const HomeContent = async () => {
  const admin = await getAdmin();

  const { name, typed, location, cv } = admin || {};

  if (!admin && !name && !typed && !location && !cv) {
    return <div>HomeSkeleton</div>;
  }

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={2}
      sx={{
        height: "100vh",
      }}
    >
      <Stack my={0} component="h1" direction="row" spacing={1}>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight:"600"
          }}
        >
          Hi I am
        </Typography>
        <Typography
          noWrap
          sx={{
            fontSize: "2rem",
            color: "#037fff",
            fontWeight:"600"
          }}
        >
          Arman Mokhtari
        </Typography>
      </Stack>

      <Box
        sx={{
          fontSize: "1.2rem",
          height: 25,
        }}
      >
        <TextTyped textArray={typed} />
      </Box>
      <Typography
        sx={{
          fontSize: "1rem",
        }}
      >
        Location {location}.
      </Typography>

      <Button
        download="resume"
        title={`Resume Download ${name}`}
        href={cv}
        variant="contained"
      >
        Resume Download
      </Button>
    </Stack>
  );
};

export default HomeContent;

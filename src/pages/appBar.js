import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "../App.css";
import { Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function appBar() {
  return (
    <Box>
      <Stack
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          paddingTop={1}
          paddingLeft={0.5}
          align="justify"
          marginLeft={"2%"}
          variant="h3"
          sx={{ flexGrow: 0.63 }}
        >
          Vidya Vuppala
        </Typography>

        <GitHubIcon sx={{ fontSize: 70, flexGrow: 0.11 }} />
        <LinkedInIcon sx={{ fontSize: 80 }} />
      </Stack>
    </Box>
  );
}
export default appBar;

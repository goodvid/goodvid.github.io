import { AppBar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "../App.css";
import { Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Divider from "@mui/material/Divider";
function appBar() {
  return (
    <Box>
      <AppBar position="fixed" color="grey">
        <Stack
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          paddingX={20}
          paddingTop={3}
        >
          <Typography align="justify" variant="h3">
            Vidya Vuppala
          </Typography>

          <Stack direction="row">
            <GitHubIcon sx={{ fontSize: 70 }} />
            <LinkedInIcon sx={{ fontSize: 80 }} />
          </Stack>
        </Stack>

        <Divider
          variant="fullWidth"
          style={{ border: "1px solid black", marginTop: "1%" }}
        />
      </AppBar>
    </Box>
  );
}
export default appBar;

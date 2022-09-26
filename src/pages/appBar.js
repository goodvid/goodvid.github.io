import { AppBar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "../App.css";
import { Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Divider from "@mui/material/Divider";
import ButtonBase from "@mui/material/ButtonBase";
import { useNavigate } from "react-router-dom";
function Menu() {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar position="fixed" color="grey">
        <Stack
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          paddingX={15}
          paddingTop={3}
        >
          <ButtonBase onClick={() => navigate("")}>
            <Typography align="justify" variant="h3">
              Vidya Vuppala
            </Typography>
          </ButtonBase>

          <Stack
            direction="row"
            spacing={{ xs: 4, sm: 8 }}
            justifyContent="space-around"
          >
            <GitHubIcon
              onClick={() => window.open("https://github.com/goodvid")}
              sx={{ fontSize: 70 }}
            />
            <LinkedInIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vidya-vuppala-903900206/"
                )
              }
              sx={{ fontSize: 80 }}
            />
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
export default Menu;

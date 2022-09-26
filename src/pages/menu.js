import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SummarizeTwoToneIcon from "@mui/icons-material/Summarize";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { CardActionArea } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";
function Menu() {
  const navigate = useNavigate();
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={10}
      alignItems="center"
      marginTop={"2%"}
      justifyContent="space-evenly"
    >
      <Card
        sx={{ maxWidth: 325, boxShadow: 4, alignContent: "center" }}
        style={{ border: "2px solid black" }}
      >
        <CardActionArea onClick={() => navigate("projects")}>
          <CardContent align="center">
            <SummarizeTwoToneIcon sx={{ fontSize: 100 }} />
            <Typography variant="h4" fontStyle={"Tahoma"}>
              Experience
            </Typography>
            <Typography variant="body1" paddingX="%" fontStyle={"Tahoma"}>
              These are the professional experiences and personal projects I've
              completed
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{ maxWidth: 325, boxShadow: 4 }}
        style={{ border: "2px solid black" }}
      >
        <CardActionArea onClick={() => navigate("CourseWork")}>
          <CardContent align="center">
            <LibraryBooksIcon sx={{ fontSize: 100 }} />
            <Typography variant="h4" fontStyle={"Tahoma"}>
              Courses Taken
            </Typography>
            <Typography variant="body1" paddingX="%" fontStyle={"Tahoma"}>
              These are the relevant classes I have taken at Purdue University
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{ maxWidth: 325, boxShadow: 4 }}
        style={{ border: "2px solid black" }}
      >
        <CardActionArea onClick={() => navigate("AboutMe")}>
          <CardContent align="center">
            <AccountBoxIcon sx={{ fontSize: 110 }} />
            <Typography variant="h4" fontStyle={"Tahoma"}>
              About Me
            </Typography>
            <Typography variant="body1" paddingX="1%">
              This section includes some fun and interesting facts about me :)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Stack>
  );
}
export default Menu;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SummarizeTwoToneIcon from "@mui/icons-material/Summarize";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { CardActionArea } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Menu() {
  return (
    <Stack
      direction="row"
      spacing={10}
      alignItems="center"
      marginTop={"2%"}
      justifyContent="space-evenly"
    >
      <Card
        sx={{ maxWidth: 325, boxShadow: 4 }}
        style={{ border: "2px solid black" }}
      >
        <CardActionArea href="https://google.com">
          <CardContent>
            <SummarizeTwoToneIcon sx={{ fontSize: 100 }} />
            <Typography variant="h3">Projects</Typography>
            <Typography variant="body1" paddingX="%">
              These are the personal projects I've completed on topics I'm
              interested in
            </Typography>
            <KeyboardArrowRightIcon sx={{ fontSize: 80 }} />
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
        sx={{ maxWidth: 325, boxShadow: 4 }}
        style={{ border: "2px solid black" }}
      >
        <CardActionArea>
          <CardContent>
            <LibraryBooksIcon sx={{ fontSize: 100 }} />
            <Typography variant="h3">Course Work</Typography>
            <Typography variant="body1" paddingX="%">
              These are the relevant classes I have taken at Purdue University
            </Typography>
            <KeyboardArrowRightIcon sx={{ fontSize: 80 }} />
          </CardContent>
        </CardActionArea>
      </Card>

      <Card
        sx={{ maxWidth: 325, boxShadow: 4 }}
        style={{ border: "2px solid black" }}
      >
        <CardActionArea>
          <CardContent>
            <LibraryBooksIcon sx={{ fontSize: 100 }} />
            <Typography variant="h3">Experience</Typography>
            <Typography variant="body1" paddingX="1%">
              These are the relevant work experiences, including internships
            </Typography>
            <KeyboardArrowRightIcon sx={{ fontSize: 80 }} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Stack>
  );
}
export default Menu;

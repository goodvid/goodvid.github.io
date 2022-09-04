import { Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "../App.css";

function Main() {
  return (
    <Box>
      <Box className="Main" justifyContent="center">
        <Card variant="string">
          <Typography
            fontSize={"1.3em"}
            fontStyle={"Tahoma"}
            marginLeft={"23%"}
            marginRight={"23%"}
            style={{ border: "4px solid black" }}
            padding={"1%"}
          >
            &#128080; Hello there! My name is Vidya, <br></br>and I am a junior
            at Purdue University <br></br> studying Computer Science &#128187;
          </Typography>
        </Card>
        <br></br>
      </Box>
    </Box>
  );
}

export default Main;

import { Typography } from "@mui/material";
function Course() {
  return (
    <>
      <br></br>
      <Typography
        align="left"
        variant="h4"
        component="h4"
        marginX="5%"
        paddingX="1%"
      >
        Course Work
      </Typography>
      <br></br> <br></br>
      <Typography
        align="left"
        variant="h4"
        component="h4"
        marginX="5%"
        paddingX="1%"
        width="35%"
        borderBottom="2px solid black"
      >
        Current Course Work (Fall 2022)
      </Typography>
      <ul
        style={{
          textAlign: "left",
          fontSize: "70%",
          paddingTop: "0.05%",
          paddingLeft: "7%",
          fontWeight: "400",
        }}
      >
        <li>
          CS 381: Introduction to the Analysis of Algorithms
          <ul>
            {" "}
            - This course gives a broad introduction to the design and analysis
            of algorithms
          </ul>
        </li>
        <li>CS 307: Software Engineering I</li>
        <ul>
          {" "}
          - This course gives a broad introduction to Software Development and
          Design through the completion of a semester long group project
        </ul>
        <li>
          CS 290: Competitive Programming
          <ul>
            {" "}
            - This course teaches several commonly encountered techniques to
            solve programming interview and competitive programming questions,
            including usage of data structures such as set, map, stack, queue,
            depth-first search, breadth-first search, binary search,
            meet-in-the-middle, etc.
          </ul>
        </li>
      </ul>
      <Typography
        align="left"
        variant="h4"
        component="h4"
        marginX="5%"
        paddingX="1%"
        width="55%"
        borderBottom="2px solid black"
      >
        Past Course Work (Fall 2020 - Spring 2022)
      </Typography>
      <ul
        style={{
          textAlign: "left",
          fontSize: "70%",
          paddingTop: "0.05%",
          paddingLeft: "7%",
          fontWeight: "400",
        }}
      >
        <li>CS 252: Systems Programming</li>
        <li>CS 251: Data Structures and Algorithms</li>
        <li>CS 250: Computer Architecture</li>
        <li>CS 240: Programming in C</li>
        <li>CS 182: Discrete Math</li>
        <li>CS 180: Programming 1 - Introduction to OOP and Java</li>
        <li>MA 261: Calculus 3-Multivariate Calculus</li>
        <li>Math 265: Linear Algebra</li>
      </ul>
    </>
  );
}
export default Course;

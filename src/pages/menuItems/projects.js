import { Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
function Projects() {
  return (
    <>
      <Typography
        align="left"
        variant="h3"
        component="h3"
        marginX="5%"
        paddingX="1%"
        fontWeight={500}
      >
        Professional Experience
      </Typography>
      <br></br>
      <Stack>
        <Typography
          align="left"
          variant="h4"
          component="h4"
          marginX="4%"
          paddingX="1%"
        >
          Chicago Mercantile Exchange - Software Engineering Intern
        </Typography>
        <br></br>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          marginX="4%"
          paddingX="1%"
          spacing={2}
        >
          <img
            src="https://www.cmegroup.com/content/dam/cmegroup/images/common/news/bnr-cme-group-459x293.jpg"
            alt="CME"
            width={500}
            height={300}
            border="1px solid black"
          ></img>
          <ul
            style={{
              textAlign: "left",
              fontSize: "65%",
              fontWeight: "400",
              marginTop: "2%",
              marginLeft: "2%",
            }}
          >
            <li>
              I’m part of a team that provides an easy and secure way to view
              trading data. I will be reconfiguring the software to support new
              file types like XML
            </li>
            <br></br>
            <li>
              Languages and Tools used:
              <ul>
                <li>Python</li>
                <ul>
                  <li>XML Parser - Element Tree</li>
                </ul>
                <li>IBM ondemand</li>
              </ul>
            </li>
          </ul>
        </Stack>
        <br></br>
        <Divider
          variant="middle"
          style={{ border: "1px solid black", marginTop: "1%" }}
        />
        <br></br>
      </Stack>
      <Typography
        align="left"
        variant="h3"
        component="h3"
        marginX="5%"
        paddingX="1%"
        fontWeight={500}
      >
        Projects
      </Typography>
      <br></br>

      <Stack>
        <Typography
          align="left"
          variant="h4"
          component="h4"
          marginX="5%"
          paddingX="1%"
        >
          Shell Project
        </Typography>
        <br></br>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          marginX="5%"
          paddingX="1%"
          spacing={2}
        >
          <img
            src={require("./shell.jpg")}
            alt="shell"
            width={"105%"}
            border="1px solid black"
          ></img>
          <ul style={{ textAlign: "left", fontSize: "65%", fontWeight: "400" }}>
            <li>
              Shell interpreter, written in C++, to replicate command processors
              like csh
            </li>
            <br></br>
            <li>
              Features included in custom shell:
              <ul>
                <li>Pipes</li>
                <li>File Redirection</li>
                <li>Wild Cards</li>
                <li>Subshell</li>
                <li>WildCard expansion</li>
              </ul>
            </li>
          </ul>
        </Stack>
        <br></br>
        <Typography
          align="right"
          variant="h4"
          component="h4"
          marginX="5%"
          paddingX="1%"
        >
          LTHC Housing Crisis Portal
        </Typography>
        <br></br>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          marginX="5%"
          paddingX="1%"
          spacing={2}
        >
          <ul
            style={{
              textAlign: "left",
              fontSize: "65%",
              paddingTop: "3%",
              fontWeight: "100",
            }}
          >
            <li>
              I’m part of a group{" "}
              <a href="https://htfpurdue.org/" target="_blank" rel="noreferrer">
                (Hack the Future)
              </a>{" "}
              that created a{" "}
              <a
                href="https://lthc.htfpurdue.org/"
                target="_blank"
                rel="noreferrer"
              >
                web app
              </a>{" "}
              for a local community’s homeless shelter called LTHC in West
              Lafayette, Indiana.
            </li>
            <br></br>
            <li>
              This website provides important information about homeless
              services to:
              <ul>
                <li>Families</li>
                <li>Veterans</li>
                <li>Individuals</li>
              </ul>
            </li>
          </ul>
          <a
            href="https://lthc.htfpurdue.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("./lthc.jpg")}
              alt="shell"
              width={"105%"}
              height={"150%"}
              border="1px solid black"
            ></img>
          </a>
        </Stack>
        <Stack>
          <Typography
            align="left"
            variant="h4"
            component="h4"
            marginX="5%"
            paddingX="1%"
          >
            Recycl App
          </Typography>
          <br></br>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            marginX="5%"
            paddingX="1%"
            spacing={2}
          >
            <img
              src={require("./recycl.jpg")}
              alt="screenshot of recycl app"
              border="1px solid black"
              height={500}
            ></img>
            <ul
              style={{
                textAlign: "left",
                fontSize: "70%",
                padding: "6%",
                fontWeight: "400",
              }}
            >
              <li>
                {" "}
                I created an android app to help people dispose waste correctly.
                The app analyses an image of trash to help the user
                recycle/trash it effectively and safely.
              </li>
              <br></br>
              <li>Technologies used are:</li>

              <ul>
                <li>Firebase studio Machine Learning for image recognition</li>
                <li>Made on Android Studio</li>
              </ul>
            </ul>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
export default Projects;

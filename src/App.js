import "./App.css";
import AppBarCustom from "./pages/appBar";
import Main from "./pages/main";
import Projects from "./pages/menuItems/projects";
import AboutMe from "./pages/menuItems/aboutMe";
import CourseWork from "./pages/menuItems/courseWork";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <h1>
      <AppBarCustom></AppBarCustom>
      <br></br>
      <br></br>
      <br></br>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/AboutMe" element={<AboutMe />}></Route>
        <Route path="/CourseWork" element={<CourseWork />}></Route>
      </Routes>
    </h1>
  );
}

export default App;

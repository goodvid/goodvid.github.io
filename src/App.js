import "./App.css";
import AppBarCustom from "./pages/appBar";
import Main from "./pages/main";
import Meny from "./pages/menu";
import Projects from "./pages/menuItems/projects";
import Course from "./pages/menuItems/courseWork";
function App() {
  return (
    <div className="App">
      <h1>
        <AppBarCustom></AppBarCustom>
        <br></br>
        <br></br>
        <br></br>
        <Main></Main>
        <Meny></Meny>
        <br></br>

        <Projects />
        <br></br>
        <Course />
      </h1>
    </div>
  );
}

export default App;

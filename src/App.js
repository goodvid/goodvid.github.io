import "./App.css";
import AppBarCustom from "./pages/appBar";
import Main from "./pages/main";
import Meny from "./pages/menu";

function App() {
  return (
    <div className="App">
      <h1>
        <AppBarCustom></AppBarCustom>
        <br></br>
        <Main />
        <Meny />
      </h1>
    </div>
  );
}

export default App;

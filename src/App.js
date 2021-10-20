import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Curriculum from "./components/curriculum/Curriculum";
import Menu from "./components/menu/Menu"
import "./app.scss"
import {useState} from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      {/*<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> */}
      <div className="sections">
        <Intro/>
        <Curriculum/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

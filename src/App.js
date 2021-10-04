import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

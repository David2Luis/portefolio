import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div>
        <Intro/>
        <Work/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

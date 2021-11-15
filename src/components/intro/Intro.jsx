import "./intro.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen,} from '@fortawesome/free-solid-svg-icons';
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Web", "Backend", "Frontend", "OutSystems"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>David Luís</h1>
          <h3>
            <span ref={textRef}></span> 
            Developer
          </h3>
        </div>
        <a href="#curriculum">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="/Images/assests/david.png" alt=""/>
        </div>
      </div>
    </div>
  );
}
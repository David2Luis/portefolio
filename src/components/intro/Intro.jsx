import "./intro.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { init } from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: false, 
      strings: ['FullStack', 'OutSystems', 'Backend', 'Frontend' ] 
    });
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2> Hello there I'm</h2>
          <h1>David Luis</h1>
          <h3><span ref={useRef}></span>Developer </h3>
        </div>
        <a href="#curriculum">
          <FontAwesomeIcon icon={faBookOpen} size="3x"></FontAwesomeIcon>
        </a>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="/Images/assests/david.png" alt=""/>
        </div>
      </div>
    </div>
  )
}
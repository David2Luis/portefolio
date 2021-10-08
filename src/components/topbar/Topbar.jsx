import "./topbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="name"> 
            David Luís
          </a>
          <div className="email">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <span> davidluis2020@gmail.com</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
            <span> 910899870</span>
          </div>
        </div>
        <div className="right">
          <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
            <span class="line1"></span>
            <span class="line2"></span>
            <span class="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
import "./topbar.scss"
import {EmailIcon, LocalPhoneIcon } from '@material-ui/icons';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="name"> 
            David Luís
          </a>
          <div className="email">
            <EmailIcon/>
            <span>davidluis2020@gmial.com</span>
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
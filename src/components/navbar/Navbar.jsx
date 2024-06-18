import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <img src="src\assets\a.png" alt="logo" />
        <div className="menu">
                <Link to="/">HOME</Link>
                <Link to="/skill">SKILL</Link>
                <Link to="/project">PROJECTS</Link>
                <Link to="/portfolio">PORTFOLIO</Link>
        </div>
        <button className="contact">
            <Link to="/contact">CONTACT ME</Link>
        </button>
        <button className="menu-btn" onClick={()=>{}}>
          <span
           class={"material-symbols-outlined"}
           style={{fontSize:"1.8rem"}}
          >
            menu
          </span>
        </button>
    </nav>
  )
}

export default Navbar
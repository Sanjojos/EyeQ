import React, { useState } from "react"
import { Link } from "react-router-dom"
import Nav from "./nav_icons"
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css"
const Navbar = () =>  {
  const [click, setClick] = useState(false)

  return (
    <>
      <Nav />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li className="nav-item">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/services'>Our Services</Link>
            </li>
            <li className="nav-item">
              <Link to='/about'>About</Link>
            </li >
            <li className="nav-item">
              <Link to='/snellen'>Snellen Chart Test (Letter Identification)</Link>
            </li>
            </ul>
       
          <div className='start'>
          <li >
              <Link to='appoint'><button className="nbtn">Book Appoinment</button></Link>
          </li>
          </div>
          
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <RxHamburgerMenu />: <RxHamburgerMenu />}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Navbar
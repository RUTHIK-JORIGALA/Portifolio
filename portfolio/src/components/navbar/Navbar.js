import React from 'react'
import "./navbar.css"
import {NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='navbar'>
      <div className="title-container">
        <h3>Ruthik</h3>
      </div>
      <div className="navigation-menu">
        <ul>
            <NavLink to='/' className='link'><li>Home</li></NavLink>
            <NavLink to='/skills' className='link'><li>Skills</li></NavLink>
            <NavLink to='/projects' className='link'><li>Projects</li></NavLink>
            <NavLink to='/contact' className='link'><li>Contact</li></NavLink>
        </ul>
      </div>
      
    </header>
  )
}

export default Navbar

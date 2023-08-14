import React, { useState } from 'react'
import "./navbar.css"
import {NavLink } from 'react-router-dom'
import {IoReorderThreeOutline ,IoCloseOutline} from 'react-icons/io5'
const Navbar = () => {
  const [mobileMenu,setMobileMenu] = useState(false);
  const [optionsDisplay, setOptionsDisplay] = useState('nav-menu');
  
  const  handleHidden = () =>{
    setMobileMenu(false);
  } 
  const handleOpen =()=>{
    setMobileMenu(true);
    
  }
  const handleClose = ()=>{
    setMobileMenu(false);
  }
  return (
    <header className='navbar'>
      <div className="navbar-container">

        <div className="title-container">
          <h3>Ruthik</h3>
        </div>
        <div className="navigation-menu">
          {/* <ul className={`nav-menu ${mobileMenu ? "":"hide"}`}> */}
          <ul className={`nav-menu ${mobileMenu ? "":"hide"}`} onClick={handleHidden}>
              <NavLink to='/' className='link'><li className='menu-name'>Home</li></NavLink>
              <NavLink to='/skills' className='link'><li>Skills</li></NavLink>
              <NavLink to='/projects' className='link'><li>Projects</li></NavLink>
              <NavLink to='/contact' className='link'><li>Contact</li></NavLink>
          </ul>
          {
            mobileMenu ? <IoCloseOutline className='nav-options-open' onClick={handleClose}/>: <IoReorderThreeOutline className='nav-options-open' onClick={handleOpen}/>
          }
          
           
        </div>
      </div>
      
    </header>
  )
}

export default Navbar

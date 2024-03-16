import React from 'react'
import logo from "../assets/images/logo.png"

export default  function Navbar() {
  return (
    <div className="nav-container">
      <a href="/">
        <img src={logo} alt="shades360logo" className='nav-logo'/>
      </a>
      <div className="nav-links">
        <a href='/'>Trends</a>
        <a href='/'>Shop By Gender</a>
        <a href='/'>Accessories</a>
        <a href='/'>About Us</a>
      </div>
      <a href="/" className="nav-link-mobile"> 
        <span>&lt;</span>
        About us
      </a>
    </div>
  )
}
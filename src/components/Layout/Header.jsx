import React from 'react'
import "../../styles/HeaderStyle.css"
function Header() {
  return (
    <div className='header'>
      <div>
        <h1>AI Emergency Platform</h1>
        <div className='navbar'>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        
      </div>
    </div>
  )
}

export default Header

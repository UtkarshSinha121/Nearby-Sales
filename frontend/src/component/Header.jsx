import React from 'react'
import {  NavLink } from 'react-router-dom'
import pic from '../images/logo.png'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg  bgcol">
  <div className="container ">
     <div className='d-flex align-item-center py-2 mx-3 ' >
     <img className='rounded-circle' src={pic} alt="" width={40} height={40}/>
   <h3 className='logo mx-2'>SaleSpotter</h3>  
  </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item mx-2 item">
          <NavLink className="nav-link " to="/signup">
             <b className='text-white'>SIGNUP</b> 
          </NavLink>
        </li>
        <li className="nav-item mx-2 item">
          <NavLink className="nav-link " to="/login">
             <b className='text-white'>LOGIN</b> 
          </NavLink>
        </li>
        <li className="nav-item mx-2 item">
          <NavLink className="nav-link " to="/about">
            <b className='text-white'>ABOUT</b> 
          </NavLink>
        </li>
      </ul>
      
    </div>
  </div>
  
</nav>

    </div>
  )
}

export default Header
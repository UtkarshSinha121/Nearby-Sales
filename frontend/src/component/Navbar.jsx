import React from 'react'
import {  NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    {/* <a className="navbar-brand" href="#">
      Navbar
    </a> */}
    <div className='d-flex align-item-center py-2 mx-3' >
   <h4> <b className='head2'>Prof </b><b className='header p-1  rounded-2'>Link</b></h4> 
    
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

    <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          
        />
        <button className="btn btn-outline-none" style={{marginLeft:'-50px'}} >
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

      
       
        <li className="nav-item mx-2 item">
          <NavLink className="nav-link " to="/home">
          <i class="fa-solid fa-house mx-1"></i>
             <b>Home</b> 
          </NavLink>
        </li>

        <li className="nav-item mx-2 item">
          <NavLink className="nav-link" to="/mynetwork">
          <i class="fa-solid fa-user-group mx-1"></i>
             <b>My Network</b> 
          </NavLink>
        </li>
       
        <li className="nav-item mx-2 item">
          <NavLink className="nav-link" to="/jobs">
          <i class="fa-solid fa-briefcase mx-1"></i>
             <b>Jobs</b> 
          </NavLink>
        </li>
        <li className="nav-item mx-2 item">
          <NavLink className="nav-link" to="/message">
          <i class="fa-solid fa-comment mx-1"></i>
             <b>Messaging</b> 
          </NavLink>
        </li>
        <li className="nav-item mx-2 item">
          <NavLink className="nav-link" to="/notification">
          <i class="fa-solid fa-bell mx-1"></i>
             <b>Notification</b> 
          </NavLink>
        </li>
        <li className="nav-item mx-2 item ">
          <NavLink className="nav-link" to="/profile">
          <i class="fa-solid fa-user mx-1"></i>
             <b>Profile</b> 
          </NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
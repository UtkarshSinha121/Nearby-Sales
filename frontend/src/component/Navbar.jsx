import React, { useState } from 'react'
import {  Link, NavLink } from 'react-router-dom'
import pic from '../images/logo.png'
import useUserContext from '../UserContext';

const Navbar = () => {

  const {loggedIn, logout} = useUserContext();

  const [currentUser, setcurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  )
  return (
    <div>
        <nav className="navbar navbar-expand-lg  bgcol">
  <div className="container ">
    <div className='d-flex align-item-center py-1 mx-3 ' >
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
          <NavLink className="nav-link " to="/home">
             <b className='text-white'>HOME</b> 
          </NavLink>
        </li>
        <li className="nav-item mx-2 item">
          <NavLink className="nav-link " to="/addproduct">
             <b className='text-white'>ADD SALE</b> 
          </NavLink>
        </li>
        <li className="nav-item mx-2 item">
          <NavLink className="nav-link " to="/login">
             <b className='text-white' onClick={logout}>LOGOUT</b> 
          </NavLink>
        </li>
       <li  className="nav-item mx-2 item" >
        <Link to='/show'>
         <img className='rounded-circle' src={"http://localhost:5000/"+currentUser.image} alt="" height={40} width={40}/>
         </Link>
       </li>
      </ul>
      
    </div>
  </div>
  
</nav>

    </div>
  )
}

export default Navbar
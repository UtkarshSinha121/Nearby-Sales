import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [currentUser, setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    )
  return (
    <div className='card profile-card card-clr user-card '>
        <div className='card-body text-center'>
           <img className='rounded-circle mb-2' src={"http://localhost:5000/"+currentUser.image} alt="" height={60} width={60}/>
           <h5>{currentUser.name}</h5>
           <h6>{currentUser.email}</h6>
           <hr />
           <Link to='/home'>
           <button className='btn button-clr'>Close</button>
           </Link>
        </div>
    </div>
  )
}

export default Profile
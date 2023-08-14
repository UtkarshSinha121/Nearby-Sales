import React from 'react'
import ManageUser from './ManageUser'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div className='bgimg4 '>
      <ManageUser/>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import ManageUser from './ManageUser'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <div className='position-fixed w-100 top-0 z-2'>
      <Navbar/>
      </div>
      <div className='bgimg4 '>
      <ManageUser/>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from './Navbar'
import PostPage from './PostPage'

const Home = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div> 
      <div className='container'>
        <div className='row'>
           <div className='col-md-3'>

           </div>
           <div className='col-md-6'>
              <PostPage/>
           </div>
           <div className='col-md-3'>

           </div>
        </div>
      </div>
    </div>
  )
}

export default Home
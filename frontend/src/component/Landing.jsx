import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

const Landing = () => {
  return (
    <div className='bgimg1 vh-100'>
       <Header/>
      <Pulse>
  <h1 className='head'>SUPER SALE</h1>
  </Pulse>
  <h5 className='head3'>Discover the Best Sales Near You in Seconds!</h5>
  <p className='head4'>Our platform connects you with local businesses offering the best deals, ensuring you save with every purchase</p>
  <Link to="/signup" >
   <button className='btn button-clr button'>Start Saving Now!</button>
   </Link> 
   
    </div>
    
  )
}

export default Landing
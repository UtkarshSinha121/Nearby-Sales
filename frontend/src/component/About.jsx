import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='bgimg4' >
        <div className='position-fixed w-100 top-0 z-2' >
       <Header/>
        </div>
        <div  >
           <h1 style={{marginTop:'80px'}} className='text-center  about-head '>SaleSpotter</h1>
           <div className='card m-5 mt-3 vh-100 card-clr'>
            <div className='card-body p-5  '>
                <h4 className='about'>Welcome to 'SaleSpotter', the ultimate digital destination to discover the hottest sales and exclusive offers at your local brick-and-mortar stores. Whether you're a thrifty shopper or a retail enthusiast, we bridge the gap between the digital and physical shopping worlds, ensuring you never miss a deal in your vicinity again.</h4>
              
              <hr />
              <h3 className='about'>Features:</h3>
              <h4 className='about' ><b className='clr-head'>Location-Based Searches:</b> Get a curated list of sales based on your current location or any specified address.</h4>
                 <h4  className='about'><b className='clr-head'> Customizable Categories:</b> Narrow down your search by selecting your preferred shopping categories.</h4>
                 <h4 className='about' > <b className='clr-head'> User Reviews and Ratings:</b> Read firsthand experiences from other shoppers about sales and products.</h4>
                 <h4 className='about' ><b className='clr-head'>  Sale Alerts:</b> Never miss a sale again! Get notified whenever your favorite stores or categories have a promotion.</h4>
                 {/* <h4 className='about' > <b className='clr-head'> Bookmark and Save:</b> Save sales that catch your eye and revisit them anytime.</h4> */}
                 <h4  className='about'> <b className='clr-head'>Retailer Profiles:</b> Get detailed info about each retailer, including store hours, contact details, and ongoing sales.</h4>
                 {/* <h4  className='about'><b className='clr-head'>  Eco-friendly Mode:</b> Promote sustainable shopping by discovering second-hand sales and eco-friendly product promotions.</h4> */}
                 <h4 className='about' >  Join our growing community of savvy shoppers today and make every purchase count with SalesSpotter!</h4>
                 <div className='d-flex justify-content-center mt-4'>
                 <Link  to="/signup" >
                    <button className='btn button-clr'>Start Saving Now!</button>
                </Link> 
                </div>
            </div>
           </div>
           
        </div>
    </div>
  )
}

export default About
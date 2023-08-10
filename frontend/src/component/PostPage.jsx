import React from 'react'

const PostPage = () => {
  return (
    <div>
        <div className='card my-3'>
            <div className='card-body border'>
        <form>
            <div className='text-center d-flex justify-content-center my-3'>
            <input className='form-control rounded-5 border-dark w-75 ' type="text"  placeholder='Start a post'/>
            </div>
            <div className='text-center'>
            <button className='btn btn-primary my-2  rounded-5'>Post</button>
            </div>
        </form> 
            
        </div>
        </div>
    </div>
   
  )
}

export default PostPage
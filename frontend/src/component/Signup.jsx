import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import Header from './Header';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(4,'Too Short').required('Required'),
});
const Signup = () => {

  
  const navigate = useNavigate();
  
  const [selImage, setselImage] = useState([]);

  const signupForm = useFormik
  ({
    initialValues: {
      name :'',
      email :'',
      password :''
  
    },
    onSubmit: async (values) => {
      values.image= selImage;
      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
           icon : 'success',
           title : 'Singnup Sucess!!',
           text: 'Now Login to Continue'
        });
        navigate('/login');
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text: 'Some Error Occured'
       });
      }
    },
    validationSchema: SignupSchema
  });
  const uploadFile = async (e) => {
        let file = e.target.files[0];
        setselImage(file.name);
        const fd = new FormData();
        fd.append('myfile', file);
    
        const res = await fetch('http://localhost:5000/util/uploadfile', {
          method: 'POST',
          body: fd
        });
    
        console.log(res.status);
      };
  
  return (
    <div>
    
    <div className=' bgimg3  vh-100'>
    
    <Header/>

 
    <div className='row align-items-center py-2 '>
    
    <div className='col-lg-7'>
    
          </div>
          <div className='col-lg-5 '>
      <div className=' card rounded-4 w-75 my-5 p-3 vh-50 sign-clr'>  
        <div className='card-body'>
          <h2 className='text-center fw-bold my-1 mb-3 loghead'>SIGN UP</h2>
          <form onSubmit={signupForm.handleSubmit} >
                  <div class="d-flex align-items-center mb-4 ">
                    <i class="fas fa-user fa-lg me-2 fa-fw fw-bold fa-xl "></i>                   
                    <p className='error-label'>{signupForm.touched.name ? signupForm.errors.name : ''}</p>
                    <input type="text" id=" " class="form-control"  name="name" placeholder='Your Name' onChange={signupForm.handleChange} value={signupForm.values.name}  />                     
                  </div>
                  <div class="d-flex flex-row  align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-2 fa-fw fw-bold fa-xl "></i>                    
                    <p className='error-label'>{signupForm.touched.email ? signupForm.errors.email : ''}</p>
                      <input type="email" id="ye" class="form-control" name="email" placeholder='Email' onChange={signupForm.handleChange} value={signupForm.values.email} />
                  </div>
                  <div class="d-flex flex-row  align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-2 fa-fw fw-bold fa-xl "></i>                    
                    <p className='error-label'>{signupForm.touched.password ? signupForm.errors.password : ''} </p>
                    <input type="password" id=" " class="form-control " name="password" placeholder='Password'onChange={signupForm.handleChange} value={signupForm.values.password}/>                   
                  </div>
                  <div className='d-flex flex-flow align-items-center mb-4 '>
                    <i class="fa-solid fa-arrow-up-from-bracket fw-bold fa-xl me-3 "></i>
                    <input  type="file" className='form-control ' placeholder='Upload Avtar' onChange={uploadFile} />
                  </div>
                  <div class="d-flex flex-row justify-content-center mx-4  ">
                    <button type="submit" class="btn button-clr btn-floating mx-1 w-100 rounded-5">Sign In</button>
                  </div>

          </form>

          </div>
        </div>  
        </div>
         

      </div> 
    </div>
    </div>
  )
}

export default Signup
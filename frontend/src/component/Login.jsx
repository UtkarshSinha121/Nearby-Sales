import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './Header';
import useUserContext from '../UserContext';


const  loginSchema = Yup.object().shape({
  
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(4,'Too Short').required('Required'),
});
const Login = () => {

  const {setloggedIn}= useUserContext();

  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email :'',
      password :''
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate',{
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
          'Content-Type' : 'application/json'
        }
      });
      console.log(res.status);
      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Login Success!!'
        }); 
        
        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        setloggedIn(true);
        navigate('/home');

      }else if(res.status === 401){
          Swal.fire({
            icon : 'warning',
            title : 'Login Failed',
            text : 'Invalid email or password'
          });
      } else{
        Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text: 'Some Error Occured'
       });
      }
    },
  
    validationSchema: loginSchema
  });
  
  return (
      
    <div className=" vh-100 bgimg2">
    <Header/>
    <div className="row align-item-center  ">
     <div className='col-lg-7'>
      
     </div>
     <div className='col-lg-5'>
     <div className=' card p-4  rounded-5 shadow-lg logcol'>
     <div className=" card-body ">
        <h2 className="text-center fw-bold loghead ">Login Form</h2>
        <form onSubmit={loginForm.handleSubmit} >
          <div className="form-outline "> 
          <p className='error-label'>{loginForm.touched.email ? loginForm.errors.email : ''}</p>
          <input className="form-control mb-3" type="email" name="email" placeholder='Email' onChange={loginForm.handleChange} value={loginForm.values.email}/>
          </div>
          <div>
          <p className='error-label'>{loginForm.touched.password ? loginForm.errors.password : ''}</p>
            <input className="form-control mb-4" type="password" name="password" placeholder='Password' onChange={loginForm.handleChange} value={loginForm.values.password} />
          </div>
         
          <button type="submit" className="btn   w-100 rounded-5 button-clr">SIGN IN</button>
        </form>
     </div>
    </div>
  </div>
</div>
 </div>
 
  )
}

export default Login
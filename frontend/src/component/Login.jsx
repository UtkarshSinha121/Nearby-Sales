import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const  loginSchema = Yup.object().shape({
  
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8,'Too Short').required('Required'),
});
const Login = () => {

  const loginForm = useFormik({
    initialValues: {
      email :'',
      password :''
    },

    onSubmit: async (values) => {
      console.log(values);
    },
    validationSchema: loginSchema
  });
  
  return (
    <div className="container py-1 vh-100">
    <div className='d-flex align-item-center py-3 ' >
   <h4> <b className='head2'>Prof </b><b className='header p-1  rounded-2'>Link</b></h4> 
  </div>
    <div className="row align-item-center  ">
     <div className='col-lg-7'>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" className='w-100 h-100'
       />
     </div>
     <div className='col-lg-5'>
     <div className='mx-5 card w-75'>
     <div className=" card-body">
        <h2 className="text-center fw-bold my-3">Login Form</h2>
        <form onSubmit={loginForm.handleSubmit} >
          <div className="form-outline ">
         
          <p className='error-label'>{loginForm.touched.email ? loginForm.errors.email : ''}</p>
          <input className="form-control mb-4" type="email" name="email" placeholder='Email' onChange={loginForm.handleChange} value={loginForm.values.email}/>
          </div>
          <div>
          <p className='error-label'>{loginForm.touched.password ? loginForm.errors.password : ''}</p>
            <input className="form-control mb-4" type="password" name="password" placeholder='Password' onChange={loginForm.handleChange} value={loginForm.values.password} />
          </div>
          <div className="d-flex justify-content-around align-item-center mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label" htmlFor="">Remember me</label>
            </div>
            <a href="">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-primary  w-100 rounded-5">SIGN IN</button>
           <div className='divider align-item-center my-4'>
          <p className='text-center fw-bold mx-3 mb=0 text-muted'>OR</p>
          </div>

          <div class="d-flex  align-items-center justify-content-center ">
          <p class="lead fw-normal mb-0 me-3">Sign in with</p>
          <button type="button" class="btn btn-primary btn-floating  mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="fab fa-linkedin-in"></i>
          </button>
        </div>

        </form>
     </div>
    </div>
  </div>
</div>
 </div>
  )
}

export default Login
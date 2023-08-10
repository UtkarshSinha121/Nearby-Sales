import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8,'Too Short').required('Required'),
});
const Signup = () => {

  const signupForm = useFormik
  ({
    initialValues: {
      name :'',
      email :'',
      password :''
  
    },
    onSubmit:  (values) => {
      console.log(values);
    },

    validationSchema: SignupSchema
  });
  return (
    <div>
    
    <div className='container  vh-100'>
    
  <div className='d-flex align-item-center py-3 ' >
   <h4> <b className='head2'>Prof </b><b className='header p-1  rounded-2'>Link</b></h4> 
    <button className='btn btn-primary ms-auto'>Log in</button>
  </div>
 
    <div className='row align-items-center py-2 '>
    
    <div className='col-lg-7'>
    <h1><i className='welcome' > Welcome to your professional community </i></h1>
     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                      className='h-100 w-100' alt="Sample image"/>
          </div>
          <div className='col-lg-5 '>
      <div className=' card w-75 vh-50 '>  
        <div className='card-body p-3 px-4'>
          <h2 className='text-center fw-bold my-4'>SIGN UP</h2>
          <form onSubmit={signupForm.handleSubmit} >
          <div class="d-flex align-items-center ">
                    <i class="fas fa-user fa-lg me-3 fa-fw mb-2"></i>
                    <div class="form-outline flex-fill mb-3">
                    <p className='error-label'>{signupForm.touched.name ? signupForm.errors.name : ''}</p>
                      <input type="text" id=" " class="form-control"  name="name" placeholder='Your Name' onChange={signupForm.handleChange} value={signupForm.values.name}  />
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row  align-items-center mb-1">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw mb-2"></i>
                    <div class="form-outline flex-fill mb-3">
                    <p className='error-label'>{signupForm.touched.email ? signupForm.errors.email : ''}</p>
                      <input type="email" id="ye" class="form-control" name="email" placeholder='Email' onChange={signupForm.handleChange} value={signupForm.values.email} />
                    </div>
                  </div>

                  <div class="d-flex flex-row  align-items-center mb-1">
                    <i class="fas fa-lock fa-lg me-3 fa-fw mb-2"></i>
                    <div class="form-outline flex-fill mb-3">
                    <p className='error-label'>{signupForm.touched.password ? signupForm.errors.password : ''} </p>
                   <input type="password" id=" " class="form-control" name="password" placeholder='Password'onChange={signupForm.handleChange} value={signupForm.values.password}/>
                      
                    </div>
                  </div>

                  {/* <div class="d-flex flex-row align-items-center ">
                    <i class="fas fa-key fa-lg me-3 fa-fw mb-3"></i>
                    <div class="form-outline flex-fill mb-3">
                      <input type="password" id=" " class="form-control" placeholder='Repeat your password'/>
                      
                    </div>
                  </div> */}

                  <div class="form-check d-flex flex-row justify-content-center mb-3">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  
                  <div class="d-flex flex-row justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-floating mx-1 w-100 rounded-5">Sign In</button>
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
import { useFormik } from 'formik';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import Navbar from './Navbar';

const AddproductSchema = Yup.object().shape({
  shopname: Yup.string().required('Required'),
  offer: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  startdate: Yup.string().required('Required'),
  expirydate: Yup.string().required('Required'),
  startmonth: Yup.string().required('Required'),
  expirymonth: Yup.string().required('Required'),
  owner: Yup.string().required('Required'),
  link: Yup.string().required('Required'),
  
});

const AddProduct = () => {

  const [selImage, setselImage] = useState([]);

    const addproductForm = useFormik({
        initialValues: {
          image : '',
          shopname :'',
          offer :'',
          startdate : '',
          expirydate : '',
          startmonth: '',
          expirymonth: '',
          location : '',
          owner : '',
          link: '',
      
        },
    
        onSubmit: async (values) => {

          values.image= selImage;
          console.log(values);
          
          //sending request to backend
          const res = await fetch('http://localhost:5000/addproduct/add', {
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
               title : 'Product Added!!',
               text: 'Product is added succesfully'
            });
           
          }else{
            Swal.fire({
              icon : 'error',
              title : 'Oops!!',
              text: 'Some Error Occured'
           });
          }
        },
        validationSchema: AddproductSchema
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
    <div>
      <Navbar/>
    </div>
   <div className="d-flex justify-content-center align-items-center vh-50 bgimg2 ">
    
      <div className="card w-50 my-3 py-2 add-clr px-4 shadow-lg rounded-4">
        <div className="card-body  p-1">
          {/* <i className="fa-solid fa-lock fa-3x d-block text-center" /> */}
          <h2 className="text-center loghead my-3">Add Local Store</h2>
          <form onSubmit={addproductForm.handleSubmit}>
           <div className='d-flex '>
            <div className='w-100 mx-5 '>
            <label htmlFor="">Shop Name</label>
            <p className='error-label '>{addproductForm.touched.shopname ? addproductForm.errors.shopname : ''}</p>
            <input className="form-control mb-2 w-75  rounded-3" type="text" name="shopname" onChange={addproductForm.handleChange} value={addproductForm.values.shopname} />
            <label htmlFor="">Start Date</label>
            <p className='error-label'>{addproductForm.touched.startdate ? addproductForm.errors.startdate : ''}</p>
            <input className="form-control mb-2 w-75 rounded-3" type="text" name="startdate"  onChange={addproductForm.handleChange} value={addproductForm.values.startdate} />
            <label htmlFor="">Start Month</label>
            <p className='error-label'>{addproductForm.touched.startmonth ? addproductForm.errors.startmonth : ''}</p>
            <input className="form-control mb-2 w-75 rounded-3" type="text" name="startmonth"  onChange={addproductForm.handleChange} value={addproductForm.values.startmonth} />
            <label htmlFor="">Location</label>
            <p className='error-label'>{addproductForm.touched.location ? addproductForm.errors.location : ''}</p>
            <input className="form-control mb-2 w-75 rounded-3" type="text" name="location"  onChange={addproductForm.handleChange} value={addproductForm.values.location} />
            <label htmlFor="">Link</label>
            <p className='error-label'>{addproductForm.touched.link ? addproductForm.errors.link : ''}</p>
            <input className="form-control mb-2 w-75 rounded-3" type="text" name="link"  onChange={addproductForm.handleChange} value={addproductForm.values.link} />
            </div>
            <div className='w-100'>
            <label  htmlFor="">Offer</label>
            <p className='error-label '>{addproductForm.touched.offer ? addproductForm.errors.offer : ''}</p>
            <input className="form-control mb-2 w-75  rounded-3" type="text" name="offer" onChange={addproductForm.handleChange} value={addproductForm.values.offer}/>
            <label   htmlFor="">End Date</label>
            <p className='error-label'>{addproductForm.touched.expirydate? addproductForm.errors.expirydate : ''}</p>
            <input className="form-control mb-2 w-75 rounded-3" type="text" name="expirydate"  onChange={addproductForm.handleChange} value={addproductForm.values.expirydate} />           
            <label   htmlFor="">End Month</label>
            <p className='error-label'>{addproductForm.touched.expirymonth? addproductForm.errors.expirymonth : ''}</p>
            <input className="form-control mb-2 w-75 rounded-3" type="text" name="expirymonth"  onChange={addproductForm.handleChange} value={addproductForm.values.expirymonth} />           
            <label   htmlFor="">Owner Name</label>
            <p className='error-label'>{addproductForm.touched.owner ? addproductForm.errors.owner : ''}</p>
            <input className="form-control mb-2 w-75 rounded-3" type="text" name="owner"  onChange={addproductForm.handleChange} value={addproductForm.values.owner} />
            <label htmlFor="">Upload File</label>
            <input  type="file" className='form-control w-75' onChange={uploadFile} />
            </div>
            </div>
            <div className='d-flex justify-content-center'>
            <button  className="btn button-clr w-75  mt-2 rounded-3">
              Add Store
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

  


export default AddProduct
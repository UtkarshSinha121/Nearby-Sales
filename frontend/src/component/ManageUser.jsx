import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const ManageUser = () => {

    const navigate = useNavigate()

    const [UserList, setUserList] = useState([]);
    const [search, setsearch] = useState([]);

     const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/addproduct/getall');
        console.log(res.status);
        if(res.status === 200){
            const data = await res.json();
            console.log(data);
            setUserList(data);
            setsearch(data);
        }
     }

     useEffect(() => {
       fetchUserData();
     }, [])

     const deleteUser = async (id) =>{
        console.log(id);
        const res = await fetch('http://localhost:5000/user/delete/'+id, {method:'DELETE'});
        if(res.status === 200){
            fetchUserData();
            toast.success('User Deleted Successfully');
        }

     }
    const displayStoreData = ()=>{
        if(UserList.length === 0) return <h1 className='text-center'>No Data Found</h1>

        return UserList.map((store)=> (<div className='col-md-6 mb-4'>
            <div className='card card-clr'>
                <div className='d-flex'>
                    <div>
                <img className='p-3 rounded-5' src={"http://localhost:5000/"+store.image} alt="" width={260} height={220} style={{overflow:'hidden'}} />
                <h5 className='sname font2 fw-bold text-center '> {store.shopname}</h5>
                </div>
                <div className='card-body'>
                    
                    <hr />
                    <h5 className='offer font'>{store.offer}</h5>
                    <div className='d-flex'>
                     <div className='w-50'>
                    <p className='font'  >Offer Start:</p>
                    <h6 style={{marginTop:'-15px'}} className='card-font'>{`${store.startdate} ${store.startmonth}`}</h6>
                    </div> 
                    <div className='w-50'>
                    <p>Offer End:</p>
                    <h6 style={{marginTop:'-15px'}} className='card-font'>{`${store.expirydate} ${store.expirymonth}`}</h6>
                    </div>  
                    </div>
                    <h5 className='card-font font'><i class="fa-solid fa-location-dot fa-sm"></i> {store.location}</h5>
                    <h5 className='card-font font'>Owner:  {store.owner}</h5>
                    <hr />
                    <div className='d-flex justify-content-center'>
                    <Link to={store.link}> <button className="btn button-clr">View Offer</button></Link>
                    </div>
                </div>
                </div>
            </div>
            
        </div>))
    }; 
    const filterStore = (e)=>{
        const value = e.target.value;
        setUserList(search.filter((store) =>{
            return store.location.toLowerCase().includes(value.toLowerCase())
        } ));
    }

  return (
    <div>
        <header className='bg-target-tertiary'>
            <div className='container py-5'>
                <p className='font  display-2 text-center fw-bold'>Browse Sales</p>
                <input type="text" className='form-control w-50 m-auto' placeholder='Search Store by Location...' onChange={filterStore}/>
                


            </div>
        </header>
        <div className='container'>
        <div className='row'> {displayStoreData()}</div>
        </div>
    </div>
  )
}

export default ManageUser
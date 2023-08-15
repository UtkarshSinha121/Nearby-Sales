import './App.css';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import Landing from './component/Landing';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import ManageUser from './component/ManageUser';
import { Toaster } from 'react-hot-toast';
import About from './component/About';
import Error from './component/Error';
import { UserProvider } from './UserContext';
import Profile from './component/Profile';
import ShowProfile from './component/ShowProfile';





function App() {
  return (
    <div>
       <Toaster position='top-center'/>
     <BrowserRouter>
       <UserProvider> 
        <Routes>
            <Route path='/' element={ <Landing/> }/>
            <Route path='landing' element={ <Landing/> }/>
            <Route path='signup' element={ <Signup/> }/>
            <Route path='login' element={ <Login/> }/>
            <Route path='home' element={ <Home/> }/>
            <Route path='addproduct' element={ <AddProduct/> }/>
            <Route path='manageuser' element={ <ManageUser/>}/>
            <Route path='about' element={ <About/>}/>
            <Route path='profile' element={ <Profile/>}/>
            <Route path='show' element={ <ShowProfile/>}/>
            <Route path='*' element={<Error/>} />
        </Routes>
        </UserProvider> 
     </BrowserRouter>

    </div>
  );
}

export default App;

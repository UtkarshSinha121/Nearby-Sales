import './App.css';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import Home from './component/Home';
import MyNetwork from './component/MyNetwork';
import Jobs from './component/Jobs';
import Message from './component/Message';
import Notification from './component/Notification';
import Profile from './component/Profile';


function App() {
  return (
    <div>
     <BrowserRouter>

        <Routes>
            <Route path='/' element={ <Signup/> }/>
            <Route path='signup' element={ <Signup/> }/>
            <Route path='login' element={ <Login/> }/>
            <Route path='home' element={ <Home/> }/>
            <Route path='mynetwork' element={ <MyNetwork/> }/>
            <Route path='jobs' element={ <Jobs/> }/>
            <Route path='message' element={ <Message/> }/>
            <Route path='notification' element={ <Notification/> }/>
            <Route path='profile' element={ <Profile/> }/>
           
           

        </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;

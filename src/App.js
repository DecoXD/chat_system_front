import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import { AuthProvider, useAuthContext } from './context/authContext';
import { useEffect, useState } from 'react';
import PrivateRoute from './store/PrivateRoute';
import Dashboard from './pages/dashboard/Dashboard';
import Messages from './components/chat/Messages';
import ChatRoom from './components/chat/ChatRoom';


function App() {

  const isAuth = () => sessionStorage.getItem('token')


  return (
    <div className="App">
      <BrowserRouter>

        <AuthProvider >

          <HeaderComponent/>
          <Routes>

            <Route path='/register' element = {<PrivateRoute Component={<Register/>} altLink={'/dashboard'} auth={isAuth}/>}/>
            <Route  path='/login' element = {<PrivateRoute Component={<Login/>} altLink={'/dashboard'} auth={isAuth}/>}/>        
            <Route  path='/dashboard' element = {<PrivateRoute Component={<Dashboard/>} altLink={'/login'} auth={isAuth}/>}/> 
            <Route path='/direct/:receiver' element={<ChatRoom/>}/>
                  
          </Routes>

          </AuthProvider>

      </BrowserRouter>
       
    </div>
  );
}

export default App;

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import { AuthProvider, useAuthContext } from './context/authContext';
import { useEffect, useState } from 'react';
import PrivateRoute from './store/PrivateRoute';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  
  const isAuth = () => sessionStorage.getItem('token')
  
  const userAuth = isAuth()
 

  return (
    <div className="App">
      <BrowserRouter>

        <AuthProvider >

          <HeaderComponent/>
          <Routes>

            <Route path='/register' element = {userAuth?<Navigate to={'/dashboard'}/>:<Register/>}/>
            <Route  path='/login' element = {userAuth?<Navigate to={'/dashboard'}/>:<Login/>}/>        
            <Route  path='/dashboard' element = {<PrivateRoute Component={<Dashboard/>} altLink={'/login'}/>}/> 
                  
          </Routes>

          </AuthProvider>

      </BrowserRouter>
       
    </div>
  );
}

export default App;

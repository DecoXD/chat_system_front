
import { Route,Navigate,Routes } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'
import Register from '../pages/register/Register'


const PrivateRoute = ({Component,notAuthLink}) => {
    let isAuthenticated = sessionStorage.getItem('token')
   
    const regEx = /\/(dashboard)\b/i
    const condition = regEx.test(notAuthLink)

    if(condition){
        return isAuthenticated? <Navigate to={`${notAuthLink}`}/> : Component 
    }

    return isAuthenticated? <Navigate to={`${notAuthLink}`}/> : Component
}

export default PrivateRoute
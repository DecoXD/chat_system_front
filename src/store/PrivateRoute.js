
import { Route,Navigate,Routes } from 'react-router-dom'
import {Context } from '../context/authContext'
import Register from '../pages/register/Register'
import { useContext } from 'react'


const PrivateRoute = ({Component,altLink}) => {
    const {isAuthenticated} = useContext(Context)
   
    const regEx = /\/(dashboard)\b/i
    const condition = regEx.test(altLink)

    if(condition){
        return isAuthenticated? <Navigate to={`${altLink}`}/> : Component 
    }

    return isAuthenticated?  Component : <Navigate to={`${altLink}`}/>
}

export default PrivateRoute
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const useAuthenticate = () => {
    const[isAuthenticated,setIsAuthenticated] = useState(false)
    const [loading,setLoading] = useState(false)
    const[error,setError] = useState(null)
    const[cancelled,setCancelled] = useState(false)
    const navigate =  useNavigate()
    function clearMemoryLeak(){
        if(cancelled) return true
    }

    //register
    async function register(userData){
        setLoading(true)
        clearMemoryLeak()
        const data = axios.post(`${process.env.REACT_APP_API}register`,userData).then((response)=>{

                //get token
                const token = response.data.token
                userAuth(token)

            }).catch((err)=>{

                console.log(err)
                userAuth(null,err)
                
            }
            )
        setLoading(false)    
    }

    const login = async (userData) =>{
        setLoading(true)
        clearMemoryLeak()

        const data = axios.post(`${process.env.REACT_APP_API}login`,userData).then((response) =>{

            const token = response.data.token
            userAuth(token)  

        }).catch((err) =>{

            console.log(err.response.data.message)
            userAuth(null,err.message)

        })
        setLoading(false)

    }
    
    function userAuth(token,err){
        if(!token){
            setError(err)
            setIsAuthenticated(false)
            return
        }
        
        sessionStorage.setItem('token',JSON.stringify(token))    
        setIsAuthenticated(true)
        navigate('/')
       
    }

    function getToken(){
        return sessionStorage.getItem('token')
    }

    useEffect(() =>{
        return () => setCancelled(true)
    })
    return {register,isAuthenticated,loading,error,login,userAuth,getToken}
}

export default useAuthenticate
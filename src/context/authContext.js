import  { createContext, useContext, useEffect } from 'react'
import useAuthenticate from '../hooks/auth/useAuthenticate'


const Context = createContext()
const AuthProvider = ({children}) => {



const {register,userAuth,login,getToken,logout} = useAuthenticate()

const isAuthenticated = getToken()

const value = {
  register,
  isAuthenticated,
  userAuth,
  login,
  logout

}
  return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
  )
}

const useAuthContext = ()=>{
    const authContext = useContext(Context)

    return authContext
    
}

export {useAuthContext,AuthProvider,Context}
import React, { useState } from 'react'
const axios = require('axios')
const useRegister = () => {
  
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)//VERIFICAR NECESSIDADE OU SE É REDUNDANTE
    const[message,setMessage] = useState(null)

    async function register({userData}){
        try {
            const data = await axios.post('/')
            
        } catch (error) {
            
        }
    }

}

export default useRegister
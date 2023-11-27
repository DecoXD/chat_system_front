import axios from "axios"
import { useEffect, useState } from "react"


const GetMessages = (query) => {
    const[messages,setMessages] = useState(null)
    const[cancelled,setCancelled] = useState(null)
    const[userId,setUserId] = useState(null)
    
    useEffect (()=>{
        const fetchMessages = async ()=>{
            if(cancelled){
                return
            }

            try {

                const token = sessionStorage.getItem('token')
                const {data} = await axios.get(`${process.env.REACT_APP_API}direct/${query}`,{headers:{
                    Authorization:`bearer ${JSON.parse(token)}`
                }})

                setMessages(data.msg_list)
                setUserId(data.senderID)

            } catch (error) {

                console.log("error")

            }
            return () => setCancelled(true)
        }

        fetchMessages()

        
    },[query])

    return {messages,userId}
  
}

export default GetMessages
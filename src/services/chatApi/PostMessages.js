import axios from "axios"
import { useEffect, useState } from "react"
import  io  from "socket.io-client"


const PostMessages =  () => {
    const socket = io(process.env.REACT_APP_API||5000)
    
    async function sendMessage(receiver,content){
        const token = sessionStorage.getItem("token")
        
        try {
            const newMessage = await axios.post(`${process.env.REACT_APP_API||5000}direct/${receiver}`,{content},{headers:{
                Authorization:`bearer ${JSON.parse(token)}`
            }})
           
            socket.emit('sendMessage',newMessage.data)
        } catch (error) {
            console.log(error)

        }
    }   

    return {sendMessage}
}   

export default PostMessages
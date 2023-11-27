import axios from "axios"
import { useEffect, useState } from "react"

const ContactList =  () => {
  
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)
    const [cancelled,setCancelled] = useState(false)
    const [contacts,setContacts] = useState(null)


    function clearMemoryLeak(){
        if(!cancelled){
            return
        }
    } 

    useEffect( () => {
        async function getContactList(){
            clearMemoryLeak()
            setLoading(true)
            const token = sessionStorage.getItem('token')    
            try {
                const response  = await axios.get(`${process.env.REACT_APP_API}contacts/all`,{headers:{
                    Authorization: `Bearer ${JSON.parse(token)}`
                }})
                 if(response){
                    setContacts(response.data.contactList)
                 }
            } catch (error) {
                console.log(error)
            }        
        }
          getContactList()
          return ()=> setCancelled(true)
    },[])

   

    return {contacts}
    
}

export default ContactList
import { useEffect, useState } from 'react'
import ChatRoom from '../../components/chat/ChatRoom'
import ContactList from '../../services/chatApi/ContactList'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  const {contacts} = ContactList()
  const [contactList,setContactList] =useState('')
 
  useEffect(()=>{
      if(contacts){
        
        setContactList(contacts)
      }
    },[contacts])
  
  return (
   <section className = {styles.dashboard}>

   

   </section>
  )
}

export default Dashboard
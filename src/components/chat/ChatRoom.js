import { createContext, useEffect, useState } from 'react'
import ContactList from '../../services/chatApi/ContactList'
import styles from './ChatRoom.module.css'
import Messages from './Messages'
import {Link, useParams} from 'react-router-dom'
import GetMessages from '../../services/chatApi/GetMessages'

export const ChatContext = createContext(null)

const ChatRoom = () => {
  const {contacts} = ContactList()
  const [contactList,setContactList] =useState('')

  const {receiver} = useParams()



  useEffect(()=>{
    if(contacts){
      setContactList(contacts)
    }
  },[contacts])


  return (
    <div className={styles.chat_container}>
    {/*  buscar as conversas a qual pertence */}
      
    <div className={styles.chat_list}>
    {contactList.length !=0 && contactList.map((contact) => <Link to={`/direct/${contact.contact_name}`} key={contact.contact_id}>{contact.contact_name}</Link>)}
    </div>

    {/* componentzar o conteiner de mensagens */}
   
      <Messages/>
   
    

  </div>
  )
}

export default ChatRoom
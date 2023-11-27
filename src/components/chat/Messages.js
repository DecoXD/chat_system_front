import { useContext, useEffect, useState,useRef } from 'react'
import { ChatContext } from './ChatRoom'
import styles from './ChatRoom.module.css'
import GetMessages from '../../services/chatApi/GetMessages'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import PostMessages from '../../services/chatApi/PostMessages'



const Messages = () => {
  const [currentChat,setCurrentChat] =useState('')
  const [currentUser,setCurrentUser] =useState('')
  const [message,setMessage] = useState('')
  const {receiver} = useParams()

  
  const {messages,userId} = GetMessages(receiver)







  const {sendMessage} = PostMessages()

  async function handleSendMessage(e){
    
    e.preventDefault()
    try {
      await sendMessage(receiver,message)
      setMessage('')
    } catch (error) {
      console.log('nao foi possivel enviar a mensagem')
    }
    
  }


  
  useEffect(()=>{  
    if(messages){  
      setCurrentChat(messages)
    }
    if(userId){
      setCurrentUser(userId)
    }
  },[messages,receiver,userId])

  useEffect(() => {
    const socket = io(process.env.REACT_APP_API);
    socket.on('upMessages', (message) => {
      const new_message = message.new_message;
      setCurrentChat((currentChat) => [...currentChat, new_message]);
    });
  
    // Limpeza na desmontagem
    return () => {
      socket.off('upMessages');
    };
  }, []);




  return (
    <div className={styles.messages_container}>
      
    <div className={styles.messages}>
       {(currentChat && currentUser) && currentChat.map((msg) =>{
            if (msg.senderID == currentUser){
              return <p className={styles.sender_message} key={msg.id}>{msg.content}</p>
            }
            return <p className={styles.receiver_message} key={msg.id}>{msg.content}</p>
          })}
      

    </div>
          
    <form className ={styles.message_form} onSubmit={handleSendMessage}>
      <input type="text" name="content" onChange={(e)=>setMessage(e.target.value)} placeholder = 'digite uma mensagem' value = {message}/>
      <button type="submit">send</button>
    </form>
  </div>
  )
}

export default Messages
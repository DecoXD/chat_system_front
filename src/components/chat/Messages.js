import styles from './ChatRoom.module.css'

const Messages = () => {
  return (
    <div className={styles.messages_container}>
      
    <div className={styles.messages}>
    <p className = {styles.sender_message}>oi</p>
    <p className = {styles.receiver_message}>oi,tudo bem?</p>
    <p className = {styles.sender_message}>tudo, e com vc?</p>
    <p className = {styles.receiver_message}>to ótima benzinho :) </p>
    

    </div>

    <form className ={styles.message_form}>
      <input type="text" name="" id="" placeholder = 'digite uma mensagem'/>
      <button type="submit">send</button>
    </form>
  </div>
  )
}

export default Messages
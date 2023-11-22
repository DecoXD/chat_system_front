import styles from './ChatRoom.module.css'
import Messages from './Messages'

const ChatRoom = () => {
  return (
    <div className={styles.chat_container}>
    {/*  buscar as conversas a qual pertence */}
    <div className={styles.chat_list}>
      <span>celo</span> <br />
      <span>érica</span>
    </div>

    {/* componentzar o conteiner de mensagens */}

    <Messages/>
    

  </div>
  )
}

export default ChatRoom
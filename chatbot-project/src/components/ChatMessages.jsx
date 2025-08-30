import {useAutoScroll} from "./useAutoScroll";
import { ChatMessage } from './ChatMessage';

function ChatMessages({chatMessages}){
  const chatMessagesref= useAutoScroll([chatMessages]);

  return(<div className="chat-messages-container" ref={chatMessagesref}> 
  {chatMessages.map((chatMessage)=>{
        return (
          <ChatMessage 
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
  })}
  </div>
  );
}

export default ChatMessages;
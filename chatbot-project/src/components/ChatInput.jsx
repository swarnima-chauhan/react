import {useState} from 'react'
import { Chatbot } from 'supersimpledev';
import LoadingSpinner from '../assets/loading-spinner.gif';
import './ChatInput.css';

export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText]=useState('');
  const [isLoading, setIsLoading]=useState(false);

  function saveinputText(event){
    setInputText(event.target.value);
  }

  async function sendMessage(){
    if(isLoading||inputText===''){
    return;
  }

  setInputText('');

  const newChatMessages=[
    ...chatMessages,
    {
      message:inputText,
      sender:'user',
      id: crypto.randomUUID()
    }
  ];

  setChatMessages([
  ...newChatMessages,
    {
      message:<img className="loading" src={LoadingSpinner}/>,
      sender:'robot',
      id:crypto.randomUUID()
    }
  ]);

  const response=await Chatbot.getResponseAsync(inputText);

  setChatMessages([
    ...newChatMessages,
    {
      message:response,
      sender:'robot',
      id:crypto.randomUUID()
    }
  ]);

  setIsLoading(false);

  }

  function handleKeyDown(event){
    if(event.key==='Enter'){
      sendMessage();
    }else if(event.key==='Escape'){
      setInputText('');
    }
  }

  return(
  <>
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveinputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="chat-input"
      />
      <button
        onClick={sendMessage} 
        className="send-button"
        >Send
      </button>
    </div>
  </>
  );
}
import { useState, useEffect, useRef } from 'react';
import './App.css';
import {Chatbot} from 'supersimpledev';
import RobotProfileImage from './assets/robot.png';
import UserProfileImage from './assets/user.png';
import LoadingSpinner from './assets/loading-spinner.gif';
      function useAutoScroll(dependencies){
        const containerRef= useRef(null);

        useEffect(()=>{
          const containerElem= containerRef.current;
          if(containerElem){
            containerElem.scrollTop= containerElem.scrollHeight;
          }
        },[dependencies]);

        return containerRef;
        
      }

      function ChatInput({chatMessages, setChatMessages}){
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
             >Send</button>
             </div>
          </>
        );
      }

      function ChatMessage({message, sender}){
        
        return(
          <div className={sender==='user'?'chat-message-user':
          'chat-message-robot'
        }>
            {sender=="robot" && (
              <img src={RobotProfileImage} className="chat-message-profile"/>
            )}
            <div className="chat-message-text">
            {message}
            </div>
            {sender=="user" && (
              <img src={UserProfileImage} 
              className="chat-message-profile"/>
            )}
          </div>
        ); 
      }

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

function App(){

        const [chatMessages, setChatMessages] = useState([]);

        return (
          <>
          {chatMessages.length===0 && <p className="para">Welcome to the chatbot project! Send a message using the textbox below.</p>}
          <div className="app-container">
            <ChatMessages 
            chatMessages={chatMessages}/>

            <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}/>
            </div>
          </>
        );
      }

export default App

import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css';

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

export default App;

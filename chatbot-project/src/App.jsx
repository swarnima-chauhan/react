import { useState, useEffect } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import {Chatbot} from 'supersimpledev';
import { ChatMessage } from './components/ChatMessage';
import './App.css';

function App(){

    useEffect(()=>{
      Chatbot.addResponses({
        'goodbye':'Good bye',
        'give me unique id':function(){
          return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
        }
      });
    },[]);

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

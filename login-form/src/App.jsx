import { useState } from 'react'
import './App.css'

function App(){
    const [showPassword, setShowPassword]=useState(true);
    
    function seePassword(){
        showPassword?setShowPassword(false):setShowPassword(true);
    }

    return (
        <>
        <h4>Hello, welcome to my website</h4>
        <input type="email" placeholder="Email"/>
        <br/>
        <input type={showPassword?'text':'password'}placeholder="Password"/>
        <button onClick={seePassword}>Hide</button>
        <br/>
        <button>Login</button>
        <button>Sign up</button>
        </>
    )
}
export default App

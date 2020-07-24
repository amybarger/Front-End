import React from 'react';
import Nav from "./Nav"

function Login() {
    return (
        <div>
           <lable>Username  </lable>

               <input 
               type="text"
               id="userinput"
               placeholder="Username"
               />
              
            
          
            <Nav />
        </div>
    )
}

export default Login

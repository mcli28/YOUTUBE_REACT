import React, {useEffect, useState} from 'react';
import './App.css';
import {io} from 'socket.io-client'

useEffect(() => {
  const socket = io('/')
  this.socket.on('message', message => {
    setMessage(message)
  })
}, []);

const [message, setMessage] = useState('')
const handleSubmit = (e) => {
  const inputValue = e.target.value
  console.log(inputValue)
  if (e.keyCode === 13 && inputValue) {
    setMessage(inputValue)
  }
  setMessage(inputValue)
  this.socket.emit('message', body)
}

function App() {

  const messages = message.map((message, index) => {
    return(
      <li key={index}><b>{message.from} : {message.body}</b></li>
    )  
  })
  return (
    <div className="App">
      <h1>React works</h1>
      <input type="text" placeholder="Insert a message" onKeyUp={handleSubmit}/>
      {message}
    </div>

    
  );

}

export default App;

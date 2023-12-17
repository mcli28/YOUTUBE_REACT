import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
//import { Greetting, UserCard } from './Greetting';
//import Product, { Navbar } from './Product';
//import { Button } from './Button';
//import { TaskCard } from './Task';
//import { Saludar } from './Saludar';
//import { Posts } from './Posts';
const root = ReactDOM.createRoot(document.getElementById('root'));

//const handleChange = function (e) {
//  console.log(e.target.value+'...');
//}


function Counter(){

  
  const [counter, setCounter] = useState(10)
  const [mensaje, setMensaje] = useState(10)
  useEffect(() => {
    console.log('render');
  }, [counter])
  return (
  <div>
    <input onChange={e=> setMensaje(e.target.value)}></input>
    <button onClick={()=>{
      alert('el mensaje es:'+mensaje)
    }}>save</button>
    <h1>Counter {counter}</h1>
    <button onClick={()=>{
      setCounter(counter+1)
    }}>
      Sumar
    </button>
    <button onClick={()=>{
      setCounter(counter-1)
    }}>
      Restar
    </button>
    <button onClick={()=>{
      setCounter(1000)
    }}>
      reiniciar
    </button>

  </div>
  )
}

root.render(<>
    <Counter/>
  </>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greetting, UserCard } from './Greetting';
import Product, { Navbar } from './Product';
import { Button } from './Button';
import { TaskCard } from './Task';
import { Saludar } from './Saludar';
const root = ReactDOM.createRoot(document.getElementById('root'));

const handleChange = function (e) {
  console.log(e.target.value+'...');
}

root.render(
  <>
    <TaskCard ready={true}/>
    <Saludar/>
    <Button text='Saludar'/>
      <input id='hola' onChange={function (e) {
        console.log(e.target.value+'...');
        }}
      />

      <input onChange={function (e) {
        console.log(e.target.value+'...');
        }}
      />
    <input onChange={handleChange}/>
    
    <form onSubmit={(e) => {
        e.preventDefault()
        console.log("Enviando datos del form")
      }}
    >
      <h1>Registro usuario</h1>
      <button> Send </button>
    </form>

  </>
);

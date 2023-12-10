import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greetting, UserCard } from './Greetting';
import Product, { Navbar } from './Product';
import { Button } from './Button';
import { TaskCard } from './Task';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Button text="Click me"/>
    <Button text="Pay" name='carolina'/>
    <Button text='' name='Joe'/>
    {/* <Greetting title="hola" name="li"/>
    <Greetting title="hola" name="xavi"/>
    <Greetting title="hola"/>
    <UserCard 
      name="Ryan Ray" 
      amount={3000} 
      married={true}
      points={[99, 33.3, 22.2]}
      address={{street: "123 main street", city: "New York"}}
      greet={function(){alert('hello')}}
    />
    <UserCard 
      name="Joe Mcmillan" 
      amount={1000} 
      married={false}
      points={[100, 20]}
      address={{street: "av some 123", city: "New York"}}
      greet={function(){alert('hello')}}
    />
    <Product/> */}
  </>
);

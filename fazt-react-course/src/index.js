import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greetting, UserCard } from './Greetting';
import Product, { Navbar } from './Product';
import { Button } from './Button';
import { TaskCard } from './Task';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <TaskCard ready={false}/>
  </>
);

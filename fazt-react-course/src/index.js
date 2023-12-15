import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greetting, UserCard } from './Greetting';
import Product, { Navbar } from './Product';
import { Button } from './Button';
import { TaskCard } from './Task';
import { Saludar } from './Saludar';
import { Posts } from './Posts';
const root = ReactDOM.createRoot(document.getElementById('root'));

const handleChange = function (e) {
  console.log(e.target.value+'...');
}

const users = [
  {
    id: 1,
    name: 'ryan ray',
    image: 'https://robohash.org/user1'
  },
  {
    id: 1,
    name: 'joe ray',
    image: 'https://robohash.org/user2'
  }
]

root.render(<>
    {users.map((user, i) => {
        return <div key={i}>
          <h1>{user.name}</h1>
          <img src={user.image}/>
        </div>
        }
      )
    }
  </>
);

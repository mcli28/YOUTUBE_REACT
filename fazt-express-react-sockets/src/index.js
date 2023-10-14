import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const express = require('express')
//const socketIO = require('socket.io')
//const path = express();
//const http = require('http')

//webpack
//const webpack = require('webpack')
//const webpackDevMiddleware = require('webpack-dev-middleware')
//const config = require('./webpack.config')

//const appExpress = express()
//const server = http.createServer(appExpress)
//const io = socketIO(server)

io.on('connection', socket => {
  console.log('socket connected: ', socket.io)
  socket.on('message', body => {
    socket.broadcast.emit('message', {
      body,
      from: socket.id.slice(8)
    })
  })
})


// middleware
//appExpress.use(webpackDevMiddleware(webpack(config)))
//appExpress.use(express.static(path.join(__dirname, 'public')))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, {Component} from "react";
import ChatRoom from "./components/ChatRoom";
import AppBar from '@mui/material/AppBar';
class App extends Component{
  render(){
    return (
      <div className="App">
        <AppBar position="static">
          <h1>ChatRoom</h1>
        </AppBar>
        <ChatRoom/>
      </div>
    )
  }
}

export default App;

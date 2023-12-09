import React, {Component} from 'react'
import db from '../FBConfig'
import {onSnapshot, collection, doc, setDoc, updateDoc, getDoc} from 'firebase/firestore';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class ChatRoom extends Component {
    constructor () {
        super()
        this.state = {
            message: '',
            messages: [
                //{id: 0, text: 'text1'},
                //{id: 1, text: 'text2'},
                //{id: 2, text: 'text3'}
            ]
        }
    }

    updateMessage(e){
        this.setState({message: e.target.value})
        console.log(this.state.message)
    }

    componentDidMount(){
        const unsubscribe = onSnapshot(collection(db, 'messages'),
            (querySnapshot) => {
                const messages = []
                querySnapshot.forEach((doc) => {
                    let {id} = doc
                    let data = doc.data()
                    messages.push({id, ...data})
                })
                this.setState({ messages })
            })
        this.unsubscribe = unsubscribe
    }

    handleSubmit(e){
        e.preventDefault()
        console.log("enter")
        const list = this.state.messages
        const newMessage = {
            id: this.state.messages.length,
            text: this.state.message
        }
        //list.push(newMessage)
        //this.setState({messages: list})
        //this.setState({message: ''})
        async function addpost(db) {  
            const messagesRef = doc(collection(db, "messages"))
            await setDoc(messagesRef, {
                id: messagesRef.id,
                text: newMessage.text
            });
        }
        addpost(db).then((res) => {
        console.log("adicionado")
        })
    }

    render() {
        const {messages} = this.state
        const messageList = messages.map(message => {
            return <li key={message.id}>{message.text}</li>
        })
        return (
            <div>
                <ol>
                    {messageList}
                </ol>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Message" variant="outlined" 
                            value={this.state.message}
                            onChange={this.updateMessage.bind(this)}
                            />
                    </Box>
                    <Button variant="outlined" type='submit'>
                        send
                    </Button>
                </form>
                
            </div>
        )
    }
}

export default ChatRoom

import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'

import db from './FBConfig'
import {onSnapshot, collection, doc, setDoc, updateDoc, getDoc, deleteDoc} from 'firebase/firestore';

class App extends Component {

  constructor(){
    super()
    this.state = {
      notes: [
        //{noteId: 1, noteContent: 'note 1'},
        //{noteId: 2, noteContent: 'note 2'},
      ]
    }
    this.addNote = this.addNote.bind(this)
    this.removeNote = this.removeNote.bind(this)
  }

  componentDidMount(){
    const unsubscribe = onSnapshot(collection(db, 'notes'),
        (querySnapshot) => {
            const notes = []
            querySnapshot.forEach((doc) => {
                let {id} = doc
                let data = doc.data()
                notes.push({id, ...data})
            })
            this.setState({ notes })
        })
    this.unsubscribe = unsubscribe
  }

  removeNote(noteId){
    const notesRef = doc(db, 'notes', noteId);
    deleteDoc(notesRef).then((res) => {
      console.log("eliminado")
    })
  }

  addNote(note){
    /*let { notes } = this.state
    notes.push({
      noteId: note.length+1,
      noteContent: note
    })
    this.setState({
      notes
    })*/

    async function addpost(db) {  
      const notesRef = doc(collection(db, "notes"))
      await setDoc(notesRef, {
          noteId: notesRef.id,
          noteContent: note
      });
    }
    addpost(db).then((res) => {
      console.log("adicionado")
    })
  }

  render(){
    return (
      <div className="notesContainer">
        <div className='notesHeader'>
          <h1>React y Firebase</h1>
        </div>
        <div className='notesBody'>
          <ul>
            {
              this.state.notes.map(note => {
                return (
                  <Note
                  removeNote={this.removeNote}
                  noteContent={note.noteContent} 
                  noteId={note.noteId}
                  key={note.noteId}
                  />      
                )
              })
            }
          </ul>
        </div>
        <div className='notesFooter'>
            <NoteForm addNote={this.addNote}/>
        </div>
      </div>
    )
  }
}

export default App;

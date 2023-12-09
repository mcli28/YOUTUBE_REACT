import React, {Component} from 'react'
import './Note.css'

class Note extends Component {
    constructor(props){
        super(props)
        this.noteContent = props.noteContent
        this.noteId = props.noteId
    }

    handleRemove(id){
        const response = window.confirm('estas seguro de eliminar?')
        if (response) {
            this.props.removeNote(id)
        }
    }

    render(){
        return(
            <div className='Note'>
                <span
                    onClick={()=>this.handleRemove(this.noteId)}
                >&times;</span>
                {this.noteContent}
            </div>
        )
    }
}

export default Note
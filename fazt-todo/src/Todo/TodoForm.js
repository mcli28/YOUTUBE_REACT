import React, {Component} from 'react'
import _ from 'lodash'
class TodoForm extends Component {
    constructor(){
        super()
        this.state = {
            error: null
        }
    }

    renderError(){
        if(!this.state.error){ return null }

        return (
            <div style={{color: 'red'}}>
                {this.state.error}
            </div>
        )

    }

    render() {
        return(
            <form onSubmit={this.handleCreate.bind(this)}>
                <input
                    ref={(input) => this.inputText = input}
                    type='text'
                    placeholder='Agrega una tarea'
                />
                <button>Create</button>
                {this.renderError()}
            </form>
        )
    }

    handleCreate(e) {
        e.preventDefault();
        let task = this.inputText.value
        let validateInput = this.validateInput(task)

        if(validateInput) {
            this.setState({error: validateInput})
            return
        }
        this.props.createTask(task)
        this.setState({error:null})
        this.inputText.value = ''
    }

    validateInput(task) {
        if(!task) {
            return 'Please enter a task'
        } else if (_.find(this.props.todos, todo => todo.task == task)) {
            return 'Task already exist'
        } else {
            return null
        }
    }

}

export default TodoForm

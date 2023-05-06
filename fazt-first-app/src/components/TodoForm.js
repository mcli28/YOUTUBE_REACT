import React, { Component } from 'react'

class TodoForm extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(e){
    const {value, name} = e.target
    this.setState({
      [name]: value
    })
    //console.log(this.state)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onAddTodo(this.state)
    console.log(this.state)
    console.log("sending...")
  }

  render() {
    return (
      <div className='column mt-2'>
        <div className='card'>
            <div className='card-content'>
                <form className='card-body' onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                      <input name='title' className="input" type="text" placeholder="Text input"
                        onChange={this.handleInput}/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Responsible</label>
                    <div className="control">
                      <input name='responsible' className="input" type="text" placeholder="Text input"
                        onChange={this.handleInput}/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                      <input name='description' className="input" type="text" placeholder="Text input"
                        onChange={this.handleInput}/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Priority</label>
                    <div className="select is-normal">
                      <select name='priority' onChange={this.handleInput}>
                        <option>Select dropdown</option>
                        <option value="LOW">LOW</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HIGH">HIGH</option>
                      </select>
                    </div>
                  </div>
                  <button className="button">Save</button>
                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default TodoForm
import React, {Component} from 'react'
import _ from 'lodash'
import todos from './todos.json'
import TodoList from './Todo/TodoList'
import TodoForm from './Todo/TodoForm';
import './App.css';

export default class App extends Component {
  
  constructor(){
    super()
    this.state = {
      todos: todos.todos
    }
  }

  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <h1>React todo</h1>
        <TodoForm 
          todos={this.state.todos}
          createTask={this.createTask.bind(this)}
        />
        <TodoList 
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)} 
        />
      </div>
    )
  }

  createTask(task){
    this.state.todos.push({
      task,
      isCompleted: false
    })
    this.setState({
      todos: this.state.todos
    })
  }

  toggleTask(task){
    const foundTodo = _.find(
      this.state.todos,
      todo => todo.task === task
    )
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({
      todos: this.state.todos
    })
  }

  saveTask(oldTask, newTask){
    const foundTodo = _.find(
      this.state.todos,
      todo => todo.task === oldTask
    )
    foundTodo.task = newTask
    this.setState({
      todos: this.state.todos
    })
  }

  deleteTask(task){
    _.remove(this.state.todos, todo => todo.task === task)
    this.setState({
      todos: this.state.todos
    })
  }

}
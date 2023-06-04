import React, {Component} from "react";
import todos from './todos.json';
import TodoForm from './components/TodoForm'

class App extends Component {
  //console.log(todos)
  constructor (){
    super()
    this.state = {
      todos: todos.todos,
      title: 'Aplicacion de Tareas',
      //ntareas: 10
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index){
    if(window.confirm('do you want to delete it?')){
      this.setState({
        todos: this.state.todos.filter((e,i) => {
          return i !== index
        })
      })
    }
  }  //let navigate = useNavigate()


  render() {
    //console.log(this.state.todos);
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="column mt-2" key={i}>
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">
                {todo.title} <span class="tag is-danger">{todo.priority}</span>
              </p>
            </div>
            <div className="card-content">
              {todo.description}
              <mark>{todo.responsible}</mark>
            </div>
            <footer className="card-footer">
              <button className="button is-danger" onClick={this.removeTodo.bind(this, i)}>Remove</button>
            </footer>
          </div>
        </div>
      )
    })
    //console.log(todosConst)
    //console.log("Antes de renderizar el componente")
    return (
      <div className="App">
        <div className="container is-fluid">

          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                  {this.state.title} - {this.state.todos.length} 
                </a>

            </div>
          </nav>
          <div className="columns is-multiline is-mobile">
            <TodoForm onAddTodo={this.handleAddTodo}/>
            {todos}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

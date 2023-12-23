import React, {useState, useEffect} from 'react'
import { tasks as data} from './tasks'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  //const [tasks, setTasks] = useState([])

    /*useEffect(()=>{
        setTasks(data)
        console.log(tasks)
    }, [])

    function createTask(task) {
      setTasks([...tasks, {
        title: task.title,
        id: tasks.length,
        description: task.description
      }])
    }

    function deleteTask(taskId) {
      console.log(taskId)
      setTasks(tasks.filter(task => task.id !== taskId))
    }*/

  return (
    <div>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>
  )
}

export default App

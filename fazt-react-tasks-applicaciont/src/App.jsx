import React, {useState, useEffect} from 'react'
import { tasks as data} from './tasks'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

function App() {
  const [tasks, setTasks] = useState([])
    useEffect(()=>{
        setTasks(data)
        console.log(tasks)
    }, [])
    function createTask(taskTitle) {
      setTasks([...tasks, {
        title: taskTitle,
        id: tasks.length,
        description: "nueva tarea"
      }])
    }

  return (
    <div>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App

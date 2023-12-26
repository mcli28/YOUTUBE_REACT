import React, {useState, useEffect, createContext} from 'react'
import { tasks as data} from '../tasks'
export const TaskContext = createContext()
export function TaskContextProvider(props) {
  //let x = "20"
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
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
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

/*function TaskContext(props) {
  return (
    <>
      <h1>Component context</h1>
      {props.children}
    </>
  )
}*/

//export default TaskContext

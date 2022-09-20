import './global.css'
import styles from './App.module.css'

import { Header } from './Header/Header'
import { TaskInput } from './TaskInput/TaskInput'
import { TaskList } from './TaskList/TaskList'
import { useState } from 'react'
import uuid from 'react-uuid';

class Task {
  id: string;
  isDone: boolean;
  content: string;

  constructor(id:string, content: string) {
    this.id = id;
    this.isDone = false;
    this.content = content
  }
}

function App() {

  const [tasks, setTasks] = useState(Array<Task>);
  const [doneTasks, setDoneTasks] = useState(0);


  function addNewTask(content: string) {
    const newTask = new Task(uuid(), content);
    setTasks([...tasks, newTask])
  }

  function toggleTaskCompletion (id:string) {
    const NewArray = [...tasks];

    for (const task of NewArray) {
      if (task.id == id) {
        if (task.isDone) {
          task.isDone = false;
          setDoneTasks(doneTasks - 1);
        } else {
          task.isDone = true;
          setDoneTasks(doneTasks + 1);
        }  
      }
    }

    setTasks(NewArray);
  }

  function deleteTask (id:string) {
    for (const task of tasks) {
      if (task.id == id) {
        if (task.isDone) {
          setDoneTasks(doneTasks - 1);
        }
      }
    }
    
    const NewArray = tasks.filter((task) => (task.id != id))
    
    setTasks(NewArray);
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <TaskInput
          addNewTask={addNewTask}
        />
        <TaskList
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          tasks={tasks}
          doneTasks={doneTasks}
        />
      </div>
    </div>
  )
}

export default App

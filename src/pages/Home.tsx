import React, { useState} from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { ColorThemeProvider } from '../Contexts/ColorTheme';


interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (newTaskTitle !== '') {
      const newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }
  
      setTasks([...tasks, newTask])
    }else{
      return;
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const mapTasks = tasks.map(item => {
      if(item.id === id){
        item.done = !item.done
      }
      return item
    })

    setTasks(mapTasks)
  }


  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const filterTasks = tasks.filter(
      item => item.id !== id
    )

    setTasks(filterTasks)
  }

  return ( 
    <ColorThemeProvider>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </ColorThemeProvider>
  )
}

import React, { useState } from 'react';
import{v4 as uuidv4} from 'uuid';
import {BrowserRouter} from 'react-router-dom' 

import './App.css';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Header from './components/Header';

const App = () => {

  const [tasks, setTasks] = useState([
       {
           id:'1',
           title:'Estudar Programação',
           completed:false,
       },
       {
         id:'2',
         title:'Ler Livros',
         completed:true,
       },
       {
        id:'3',
        title:'Fazer Exercícios',
        completed:false,
      },
      {
        id:'4',
        title:'Beber Água',
        completed:false,
      }
      

  ]);

   const handleTaskClick = (taskId) => {
      const newTasks = tasks.map((task) => {
           if (task.id === taskId) return { ...task, completed: !task.completed}
  
          return task;
          });
   
          setTasks(newTasks)
    };

const handleTaskAddition = (taskTitle) =>{
    const newTasks =[
      ...tasks,
      {
        title: taskTitle,
        id:uuidv4(),
        completed:false,
      },

    ];
     
    setTasks(newTasks);

};

const handleTaskDeletion =(taskId) => {
   const newTasks = tasks.filter((task) => task.id !== taskId);
 
   setTasks(newTasks);
};

  return (
       <>
   <div className='container'>
              <Header />
              <AddTask handleTaskAddition={handleTaskAddition}/>
             <Tasks tasks={tasks} handleTaskClick={handleTaskClick} 
             handleTaskDeletion={handleTaskDeletion}/>
   </div>     
               
       </>
  );
}

export default App;

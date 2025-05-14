import './components/todo/todo.css';
import TodoData from './components/todo/todoData';
import Todonew from './components/todo/todonew';
import Logo from './assets/react.svg';
import { useState } from 'react';


const App = ()  =>{ 

  const [todoList, settodoList] = useState ([
    // {id: 1, name: "Learning React"},
    // {id: 2, name: "My name is"}
  ])


  const addNewTodo =(name) => {
    const newTodo ={
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    settodoList([...todoList, newTodo])
  }
  const randomIntFromInterval = (min, max)=> {
    //min max included
    return Math.floor(Math.random() * (max - min +1)+min);
  }
  //key: value
  return (
    <div className="todo-container"> 
      <div className="todo-title">Todo List</div>
      <Todonew 
        addNewTodo ={addNewTodo}
      />
      {todoList.length > 0 ?
      <TodoData 
          todoList={todoList}
      />:

      
      <div className='todo-image'>
        <img src={Logo} className='logo'/>
      </div>}
      {/* {todoList.length > 0 &&
      <TodoData 
          todoList={todoList}
      />}

      {todoList.length ===0 &&
      <div className='todo-image'>
        <img src={Logo} className='logo'/>
      </div>} */}
    </div>
  )
}

export default App

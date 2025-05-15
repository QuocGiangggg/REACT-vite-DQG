import './components/todo/todo.css';
import TodoData from './components/todo/todoData';
import Todonew from './components/todo/todonew';
import Logo from './assets/react.svg';
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';


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
  const deleteTodo =(id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    settodoList(newTodo);
  }
  //key: value
  return (
    <>
      <Header/>
      <div className="todo-container"> 
        <div className="todo-title">Todo List</div>
        <Todonew 
          addNewTodo ={addNewTodo}
        />
        {todoList.length > 0 ?
        <TodoData 
            todoList={todoList}
            deleteTodo ={deleteTodo}
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
      <Footer/>
    </>
  )
}

export default App

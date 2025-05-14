import './components/todo/todo.css';
import TodoData from './components/todo/todoData';
import Todonew from './components/todo/todonew';
import Logo from './assets/react.svg';
import { useState } from 'react';


const App = ()  =>{ 

  const [todoList, settodoList] = useState ([
    {id: 1, name: "Learning React"},
    {id: 2, name: "My name is"}
  ])

  const Giang="Dang Quoc Giang";
  const age ="23";
  const data={
    address: "Ha Noi",
    country: "Viet Nam"
  }
  const addNewTodo =(name) => {
    alert(`call me ${name}`)
  }
 
  return (
    <div className="todo-container"> 
      <div className="todo-title">Todo List</div>
      <Todonew 
        addNewTodo ={addNewTodo}
      />
      <TodoData 
      name={Giang}
      age ={age}
      data ={data}
      todoList={todoList}
      />
      <div className='todo-image'>
        <img src={Logo} className='logo'/>
      </div>
    </div>
  )
}

export default App

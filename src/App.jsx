import './components/todo/todo.css';
import TodoData from './components/todo/todoData';
import Todonew from './components/todo/todonew';
import Logo from './assets/react.svg';


const App = ()  =>{

  return (
    <div className="todo-container"> 
      <div className="todo-title">Todo List</div>
      <Todonew/>
      <TodoData/>
      <div className='todo-image'>
        <img src={Logo} className='logo'/>
      </div>
    </div>
  )
}

export default App

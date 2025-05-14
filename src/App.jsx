import './components/todo/todo.css';
import TodoData from './components/todo/todoData';
import Todonew from './components/todo/todonew';
import Logo from './assets/react.svg';


const App = ()  =>{

  const Giang="Dang Quoc Giang";
  const age ="23";
  const data={
    address: "Ha Noi",
    country: "Viet Nam"
  };
  return (
    <div className="todo-container"> 
      <div className="todo-title">Todo List</div>
      <Todonew />
      <TodoData 
      name={Giang}
      age ={age}
      data ={data}
      />
      <div className='todo-image'>
        <img src={Logo} className='logo'/>
      </div>
    </div>
  )
}

export default App

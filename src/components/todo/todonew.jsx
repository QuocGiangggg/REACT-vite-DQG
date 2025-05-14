import { useState } from "react";

const Todonew =(props) =>{
    //useState hook
    //const valueInput = "sdasd";
    const[valueInput, setvalueInput] = useState("Giang")
    const {addNewTodo} = props;
    //addNewTodo("Dang Quoc Giang")
    const handleClick =() => {
       addNewTodo(valueInput)
       setvalueInput("");
    }
    const handleonChange = (name) => {
        
        setvalueInput(name)
    }
    return (
        <div className='todo-new'>
        <input 
            type ="text"
            onChange ={(evnet) => handleonChange(evnet.target.value)}
            value={valueInput}
        />
        <button 
            style ={{cursor: "pointer"}}
            onClick={handleClick}
        >Add</button>
        <div>
            My text input is ={valueInput}
        </div>
      </div>
    )
}
export default Todonew;
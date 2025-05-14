
const Todonew =(props) =>{
    console.log('check: ',props)
    const {addNewTodo} = props;
    //addNewTodo("Dang Quoc Giang")
    const handleClick =() => {
        alert("Click me")
    }
    const handleonChange = (name) => {
        console.log("check: ",name)
    }
    return (
        <div className='todo-new'>
        <input 
            type ="text"
            onChange ={(evnet) => handleonChange(evnet.target.value)}
        />
        <button 
            style ={{cursor: "pointer"}}
            onClick={handleClick}
        >Add</button>
      </div>
    )
}
export default Todonew;
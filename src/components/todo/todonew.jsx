
const Todonew =(props) =>{
    console.log('check: ',props)
    const {addNewTodo} = props;
    addNewTodo("Dang Quoc Giang")
    return (
        <div className='todo-new'>
        <input type ="text"/>
        <button>Add</button>
      </div>
    )
}
export default Todonew;
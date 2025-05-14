
const TodoData = (props) => {
    //props la 1 object
    // {
    //     name: "Giang",
    //     age: 23,
    //     data: {}
    // }
    //destrucTuringOB
    const{todoList} = props;
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    return (
        <div className='todo-data'>
                {todoList.map((item, index) => {
                    console.log(">>> check: ", item, index)
                    return (
                    <div className={`todo-item`} key ={item.id}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                    )
                })}
   
    
      </div>
    )
}
export default TodoData;

const TodoData = (props) => {
    //props la 1 object
    // {
    //     name: "Giang",
    //     age: 23,
    //     data: {}
    // }
    const{name, age, data} = props;
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
   console.log(">>> check props: ",props);
    return (
        <div className='todo-data'>
            <div>My name is {name} </div>
            <div>Learning React</div>
      </div>
    )
}
export default TodoData;
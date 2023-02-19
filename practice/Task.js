const ShowTask = (props) =>{
    return (<div><h1 style={{color : props.completed ? "green" : "red"}}>{props.name}</h1>
    <button onClick={()=> props.completedTask(props.id)}>Completed</button>
    <button onClick={()=> props.deleteTask(props.id)}>X</button></div>)
}
export {ShowTask}
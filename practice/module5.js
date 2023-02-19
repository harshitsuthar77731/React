import './App.css';
import {useState} from 'react';
import {ShowTask} from '../my-app/src/Task'

function App() {
  const [taskList,setTaskList] = useState([])
  const [taskName,setTaskName] = useState("")
  const deleteTask = (id)=>{
    setTaskList(taskList.filter((obj)=>{
      if(obj.id === id)
        return false
      else  
        return true
  }))
  }
  const completedTask = (id)=>{
    setTaskList(taskList.map((task)=>{
      if(task.id===id){
        return {...task, completed : true}
      }else
        return task
    }))
  }
  const addTask = ()=>{
    let obj = {
      id :  taskList.length===0 ? 1 : taskList[taskList.length-1].id+1,
      name : taskName,
      completed : false
    }
    setTaskList([...taskList,obj])
    console.log(taskList)
  }

 
  return (<div className="App">

  <div className='addTask'>
    <input onChange={(event)=>{
        setTaskName(event.target.value)
    }}></input>
    <button onClick={addTask}>Add task</button>
  </div>
    

<div className="List">

</div>
  {
    taskList.map((value)=>{
      return(
          <ShowTask name = {value.name} id = {value.id} deleteTask = {deleteTask} completed = {value.completed} completedTask = {completedTask}/>   
        )
    })
  }
</div>

  )
}




export default App;

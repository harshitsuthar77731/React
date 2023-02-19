import './App.css';
import {useState,useEffect} from 'react'
import Axios from 'axios';
import axios from 'axios';





const App = ()=>{
  const [name,setName] = useState("")
  const [age,setAge] = useState(0)
  const getName = ()=>{
    axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setAge(res.data.age)
      console.log(res.data,name)
    })
  }
 
  return ( <div className='App'>
    <input placeholder='Enter name to predict age' onChange={
      (event)=>{
        setName(event.target.value)
      }
    }></input>
    <button onClick={getName}>Enter</button>
    <h1>{age}</h1>
  </div>
  )
}




export default App;

import './App.css';
import {useState,useEffect} from 'react'

const App = ()=>{
  const [flag,setFlag] = useState(true)
  const [text,setText] = useState("")

  useEffect(()=>{
    console.log("Component mounted")
    return () =>{console.log("Component unmounted")}
  },[text])




  const change = ()=>{
    setFlag(flag ? false : true)
  }
  
  return ( <div className='App'>
    <div>
            <button onClick={change} >ShowText</button>
             <input onChange={(event) => {
    setText(event.target.value)
  }}></input> 
            {flag && text}
        </div>
  </div>
  )
}




export default App;

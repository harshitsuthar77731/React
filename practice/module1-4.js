import './App.css';
import {Planet} from './Planet.js'
import {useState} from 'react';




function App() {
  let name = <h1> this representing variable </h1>  
  
  const [ranAge,setAge] = useState(0)
  const [showInput,setInput] = useState("")
  const [stateFlag,setFlag] = useState(false)
  const [val,setVal] = useState(0)

  let nameArr = ["harshit", "tanu", "garv", "himanshu"]
  let num = 21
  let flag = true
  let planet = [
    {name : "Mars", isGasPlanet : false},
    {name : "Earth", isGasPlanet : false},
    {name : "Jupiter", isGasPlanet : true},
    {name : "Venus", isGasPlanet : false},
    {name : "Neptune", isGasPlanet : true},
    {name : "Uranus", isGasPlanet : true}
  ]
  const increase = () =>{
    setAge(ranAge+1)                       // using useState
    console.log(ranAge)
  }
  const handleInputValue = (event) =>{
    setInput(event.target.value)
    console.log(event.target.value)
  }
  const changeFlag = ()=>{
    setFlag(stateFlag ? false :true)
    console.log(stateFlag)
  }



  return( <div className="App">
      {/* {User} we cant use component like variable component    */}
      <User/>
      <User/>
      <VarUser name = "tanu" age = {21} email = "tanu@gmail.com"/>
      <VarUser name = "shantilal" age = {42} email = "shantu@gmail.com"/>
      {name}


     {/* ************************************** */}


      {/* if we want display list  */}

      {nameArr.map((value,key)=>{
        return <h1 key={key}>{value}</h1>
      })}

     {/* ************************************** */}

      {/* ternary operator  */}

      {num>=22 ? <h1>its greater than 22</h1> : <h1>its less than 22</h1>}
      {flag && <button>If flag is true than this button will be shown</button>} 

      <h1 style={{color : flag ? "red" : "green"}}  >if flag true than color is red</h1>


     {/* ************************************** */}
      {/* list of object with condn using ternary operator  */}

      {planet.map((value,key)=>{
        return (<Planet name = {value.name} isGasPlanet = {value.isGasPlanet}/>)
      })}
      {/* ************************************** */}
      {/* useState  ex1*/}

      <div>
        {ranAge} <button onClick={increase}>Increase</button>
      </div>
      
      {/* ************************************** */}
      {/* useState  ex2*/}

      <div>
        <input type="text" onChange={handleInputValue} />
        {showInput}

      </div>
      {/* ************************************** */}
      {/* useState  ex3*/}

      <div>
        <button onClick={changeFlag} >show/hide</button>
       {stateFlag? <h1>When i clicks a button either show or hide the text</h1> : <h1></h1>}
      </div>

      {/* ************************************** */}
      {/* useState  ex4*/}

      <div>
        <button onClick={()=>{
          setVal(val+1)
        }} >increase</button>
        <button onClick={()=>{
          setVal(val-1)
        }} >decrease</button>
        <button onClick={()=>{
          setVal(0)
        }} >setzero</button>
        {val}

       
      </div>

  </div>)
}






// instead of using multiple time variable we can use js component 
const User = () => {
  return (<div> 
    <h1>harshit</h1>
    <h1>20</h1>
    <h1>harshitsuthar77731@gmail.com</h1>
    </div>)
}

const VarUser = (props) => {
  return (<div> 
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.email}</h1>
    </div>)

}

export default App;

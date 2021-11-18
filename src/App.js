import React, { useState } from "react";
import "./hooks.css"

// const App = () => {
//   // let counter = 1;
//   // const[counter , setCounter] = useState(0);
   
//   //  const incre = () => {
//   //   //  counter = counter+1;
//   //   //  console.log(counter)
//   //   setCounter(counter+1)
//   //  };
//   //  return (
//   //  <div> 
//   //    {counter}
//   //    <button onClick = {incre}> Increment</button>
   
//   //  </div>
//   //  );
//   const[name,setName] = useState('rohit');

//   let change = (event) => {
//     const newValue = event.target.value;
//     setName(newValue);
//   }return
//   (
//     <div>
//       <input placeholder = "inputValue..." onChange= {change}/>
//       {name}
//     </div>
//   )
// }

// const App = () =>
// {
//   const[name,setName] = useState("");
//   const [fullName , setFullName] = useState("");


//   const inputEvent = (event) =>{
//     // setName
//     console.log(event.target.value)
//     setName(event.target.value)

//   }

//   const onSubmit = () =>{
//     setFullName(name)
//   }
//   return(
//     <div>
//       <h1>Hello {fullName} </h1>
//       <input type="text" placeholder="Enter Your Name" onChange={inputEvent}
//       value =  {name}/>
//       <button onClick = {onSubmit}> Clicked Me</button>

//     </div>
//   );
// }

const App = () =>{
  const [name, setName] = useState("");

  return(
    <>
    <h1> Hello {name} </h1>
    <input type="text" placeholder ="Enter Your Name" onChange=""></input>
    <button>Clicked </button>
    </>
  )
}
export default App;
import React,{useState} from "react";

const BtSbmt = () =>{
    
    const[fullName,setfullName] = useState({
      fname:"",
      lname:"",
    });
  const inputEvent = (event) =>{
    // setName
    console.log(event.target.value)
    // setName(event.target.value)

  }
  const onSubmit = (event) =>{
      event.preventDefault();
      alert("form submitted")
  }
    return (
    <>

     <div className= "main_div">
         <form onSubmit= {onSubmit} >
             <div>
       <h1>Hello {fullName.fname} {fullName.lname}</h1>
       <input type="text" placeholder="Enter Your Name" 
       name="fName"
      onChange={inputEvent}
      value =  {fullName.fName}/>
      <input type="text" placeholder="Enter Your Name" 
      name="lName"
    onChange={inputEvent}
      value =  {fullName.lName}/>
       <button type = "submit" onClick = {onSubmit}> Submit Me</button>
       </div>
       </form>
     </div>
    </>
    );
}

export default BtSbmt;
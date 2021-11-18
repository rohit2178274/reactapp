import React, { useState } from "react";

const Btn = () => {

    const [count, setCount] = useState(87);
    // let count =1;
    const incNum = () =>{
        setCount(count+1);
        // console.log("clicked " + count++);    
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick= {incNum}>Click</button>
        </>
    );
};
export default Btn;
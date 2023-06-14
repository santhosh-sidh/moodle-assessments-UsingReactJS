import React,{useState}from "react";;


function Hooks(){
     let[variable,setVariable] = useState(0);
     let[variable1,setVariable1] = useState(0);

    return(
        <>
            <p>{variable}</p>
           <button onClick={()=>{setVariable(variable+1)}}>Increment</button>
           <button onClick={()=>{setVariable(variable-1)}}>Decrement</button>
           <button onClick={()=>{setVariable(variable1)}}>Reset</button>
        </>
    );
}
export default Hooks;
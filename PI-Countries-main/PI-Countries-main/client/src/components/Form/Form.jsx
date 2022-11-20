import React from "react";
import { useState } from "react";
function Form() {
 const [input,setInput]= useState({
  name:""
 })
const handleInputChange= function(e){
  setInput({
    ...input,
    [e.target.name]:e.target.value
  })
}
const handleSubmmit= (e)=>{
  e.preventDefault()
  console.log("submit");
} 
  
  return (
      <div>
        <form action="" onChange={handleSubmmit} >
          <input type="text" placeholder="Escribir nombre" name="name" value={input.name} onChange={handleInputChange} />
          <input type="submit" value="Add"  />









        </form>
      </div>
    );
  }
  
  export default Form;
  
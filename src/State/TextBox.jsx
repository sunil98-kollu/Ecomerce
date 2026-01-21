import React from 'react'
import { useState } from 'react'

const TextBox=()=> {

    const[text,setText]=useState("")
    const HandleText=(e)=>{
    setText(e.target.value)
    }
  return (
    <div>
      
      <input type='text' placeholder='enter name' onChange={HandleText}/>
      <p> hi:-{text}</p>
    </div>
  )
}
export default TextBox 
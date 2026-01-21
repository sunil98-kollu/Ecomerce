import React, { useState } from 'react'

 const Counter=() =>{
    const[count,setCount]=useState(0)
    
    const increment=()=>{
        setCount(count+1)
    }
  const decrement=()=>{
    setCount(count-1)
  }
  return (
    <div>
        <button style={{backgroundColor:'red',fontSize:40}} onClick={increment}>increment+</button>
        <p style={{fontSize:50}}>{count}</p>
         <button style={{backgroundColor:'red',fontSize:40}} onClick={decrement}>decrement-</button>
    </div>
  )
}
export default Counter
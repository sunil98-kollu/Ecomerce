import React from 'react'

export default function OnClick() {
    const handleClick=()=>{
        alert('button clicked')
    }
      const handleClicks=(name)=>{
        alert('button clicked'+name)
    }
     const handleChange=(e)=>{
        alert(e.target.value)
        alert('handleChange clicked')
    }
  return (
    <div>
 
          <input onClick={handleChange}></input>
               <button onClick={handleClick}>ClickMe</button> 
               <button onClick ={()=> handleClicks("Sai")}>Greet</button>
    </div>
  )
}
 
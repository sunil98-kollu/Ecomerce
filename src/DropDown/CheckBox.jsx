import React from 'react'

export default function CheckBox() {

     const handleChange=(e)=>{
      if(e.target.checked)
        console.log(e.target.value)
    }
  return (
    <div>
      <h1> 
         Mini projects: - Implement checkbox event handling using a single event 
          handler function and log the selected values to the console
      </h1>

      <div onChange={handleChange} style={{fontSize:40}}>
       <br></br>
       <input type="checkbox" value="HTMl" /> HTMl
       <br></br>
       <input type="checkbox" value="CSS" /> CSS
       <br></br>
       <input type="checkbox" value="JAvaScript" /> JAvaScript
      <br></br>
      <input type="checkbox" value="React" /> React
     </div>
    </div>
  )
}

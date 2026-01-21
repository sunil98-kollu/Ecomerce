import React from 'react'

export default function DropDownEvent() {

    const selectChange=(e)=>{
        console.log(e.target.value)
    }
  return (
    <div>

      <h1> Mini project:-
          -- Handle dropdown events:
          When user selects dropdown value, it should be displayed in the console </h1>

          <select onChange={selectChange} style={{fontSize:40}}>
            <option value="">Select Vehicles</option>
            <option value="Lorry">Lorry</option>
            <option value="Aeroplane">Aeroplane</option>
            <option value="Helicoftor">Helicoftor</option>
            <option value="Bus">Bus</option>
          </select>
    </div>
  )
}

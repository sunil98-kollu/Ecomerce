import React from 'react'

export default function Destructring(props) {
  
   const { name, age } = props;
    return (
    <div>
     hi my name is, {name}, my age is: {age}

    </div>
  )
}

import React from 'react'

export default function ProductList() {
    const data={
        product1:"Burger",
        product2:"Pizza"
    }
  return (
  <div style={{margin:100, color:'red' ,textAlign:'center',fontSize:50}}>
      <p> List of Popular items: {data.product1}, {data.product2}</p>
    </div>
  )
}

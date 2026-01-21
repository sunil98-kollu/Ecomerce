import React, { createElement } from 'react'

export default function AssJsx() {
const product={
    name:"Laptop",
    price:232322,
    category:"Electronics"
}


return (
    <>
    <h1>Display product Details </h1>
     <div style={{ color: "red", backgroundColor: "yellow", fontSize: "20px" }}>
     <p>Product Name  :- {product.name} </p>
      <p>Product Price :-{product.price}</p>
      <p>Product Category :-{product.category}</p>
    </div>
    </>
  )
}






/*
return (
    <>
    <h1>Display product Details </h1>
     <div style={{ color: "red", backgroundColor: "yellow", fontSize: "20px" }}>
     <p>Product Name        :- {product.name} </p>
      <p>Product Price     :-{product.price}</p>
      <p>Product Category  :-{product.category}</p>
    </div>
    </>
  )
*/

/*

return React.createElement(
 "div",
 { className: "product-card" },
 React.createElement("h2", null,"Productname :"+ product.name),
 React.createElement("p", null, "Category: " + product.category),
 React.createElement("p", null, "Price: ₹" + product.price)
 );
}
"h2" → heading tag
null → no props
Text is created by string concatenation

<div class="product-card">
<h2>Productname :Laptop</h2>
<p>Category: Electronics</p>
<p>Price: ₹232322</p></div>
*/
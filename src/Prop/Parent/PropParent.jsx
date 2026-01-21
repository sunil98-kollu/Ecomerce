import React from 'react'
import ChildOne from '../ChildOne'
import Destructring from '../Destructring'
//import Product from '../Product.jsx'
import AddToCart from '../AddToCart'
import ProductCard from '../PropAssignment/Product/ProductCard.jsx'
import Product from '../PropAssignment/Product/Product.jsx'
import LikeAndDislikeParent from '../PropAssignment/LikeAndDislike/LikeAndDislikeParent.jsx'
export default function PropParent() {


  return (

    <div>
      {/* <h1>parent prop</h1> */}
      {/* <ChildOne ChildProp="sunil"/> */}
         {/* <Destructring name={"sun"} age={23}/> */}
         {/* <Product/> */}
       {/* <AddToCart/> */}
       {/* <Product/> */}
       <LikeAndDislikeParent/>
    </div>
  )
}

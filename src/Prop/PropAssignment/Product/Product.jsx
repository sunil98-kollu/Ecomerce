import React from 'react'
import ProductCard from './ProductCard'

export default function Product() {
    const products = [
    { id: 1, name: "Laptop", price: 60000, inStock: true },
    { id: 2, name: "Mobile", price: 30000, inStock: false },
    { id: 3, name: "Headphones", price: 3000, inStock: true }
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ProductCard products={products} />
    </div>
  );
}

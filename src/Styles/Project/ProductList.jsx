import React from "react";

const ProductList = () => {
  const products = [
    { name: "Laptop", price: 500, isInStock: true },
    { name: "Phone", price: 300, isInStock: false },
    { name: "Headphones", price: 50, isInStock: true },
    { name: "Chairs", price: 510, isInStock: true },
  ];
  const cardStyle = {
    border: "2px solid #797676",
    padding: "16px",
    width: "150px",
    borderRadius: "6px",
    textAlign: "center",
  };
  return (
    <>
      <div style={{ display: "flex", gap: "30px" }}>
        {products.map((product) => {
          return (
            <div key={product.name} style={cardStyle}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p
                style={{
                  color: product.isInStock ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {product.isInStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProductList;

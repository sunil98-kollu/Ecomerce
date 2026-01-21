
import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ products }) {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          <p
            className={
              product.inStock ? styles.inStock : styles.outOfStock
            }
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext.jsx';
import CommonButton from '../Components/CommonComponents/CommonBotton';

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await resp.json();
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            addToCart({ id: product.id, name: product.title, price: product.price, image: product.image });
        }
    };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Product Details Page</h1>
      <Link to="/products">
        <CommonButton text="Back to Products" />
      </Link>
      {product ? (
        <table border="3" style={{ margin: '0 auto', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Image</th>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={product.image} alt={product.title} style={{ width: '100px' }} /></td>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>
                <CommonButton text="Add to Cart" onClick={handleAddToCart} />
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

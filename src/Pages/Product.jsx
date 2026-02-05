import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCart } from '../contexts/CartContext.jsx';
import { useSearch } from '../contexts/SearchContext.jsx';
import CommonButton from '../Components/CommonComponents/CommonBotton';
import '../Components/CommonCSS/Product.css';

export default function Product() {
  const navigate = useNavigate();
  const { addToCart, getTotalQuantity } = useCart();
  const { searchText } = useSearch();
  const [productData, setProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const filtered = productData.filter(product =>
      product.category.includes(searchText)
    );
    setFilteredProducts(filtered);
  }, [searchText, productData]);

  const loadData = async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();
    setProductData(data);
    setFilteredProducts(data);
    console.log(data);
  };

  const handleAddToCart = (product) => {
    addToCart({ id: product.id, name: product.title, price: product.price, image: product.image });
  };

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <div className="product-container">
      <h1 className="product-title">Click on products to view Product details</h1>
      <div className="product-grid">
        {filteredProducts.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} className="product-image" onClick={() => handleViewDetails(product.id)} />
              <h4 className="product-title-card">{product.title}</h4>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <CommonButton className="add-to-cart-button" text="Add to Cart" onClick={() => handleAddToCart(product)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}



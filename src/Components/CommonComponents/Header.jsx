import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext.jsx";
import { useSearch } from "../../contexts/SearchContext.jsx";
import CommonButton from "./CommonBotton";
import CommonInput from "./CommonInput";
import "../../Components/CommonCSS/Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { getTotalQuantity } = useCart();
  const { searchText, setSearchText } = useSearch();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title" onClick={() => navigate("/products")}>
          E-Commerce Store
        </h1>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
          />
        </form>
        <div className="header-cart">
          <CommonButton
            text={`🛒 Cart (${getTotalQuantity()})`}
            onClick={() => navigate("/cart")}
            className="cart-button"
          />
        </div>
      </div>
    </header>
  );
}

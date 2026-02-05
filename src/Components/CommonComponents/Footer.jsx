import React from 'react';
import '../../Components/CommonCSS/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>E-Commerce Store</h3>
          <p>Your one-stop shop for all your needs.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Products</li>
            <li>Cart</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@ecommerce.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

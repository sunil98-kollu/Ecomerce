import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Components/CommonCSS/Invoice.css';

export default function Invoice() {
  const location = useLocation();
  const navigate = useNavigate();
  const invoiceData = location.state;

  if (!invoiceData) {
    return (
      <div className="invoice-not-found">
        <h1>Invoice Not Found</h1>
        <p>This invoice cannot be accessed directly. Please complete a checkout to view an invoice.</p>
        <button onClick={() => navigate('/products')}>Go to Products</button>
      </div>
    );
  }

  const { invoiceId, date, items, totalQuantity, totalPrice, gst, discount, finalAmount } = invoiceData;

  return (
    <div className="invoice-container">
      <h1 className="invoice-title">Invoice</h1>
      <div className="invoice-header">
        <p><strong>Invoice ID:</strong> {invoiceId}</p>
        <p><strong>Date & Time:</strong> {date}</p>
      </div>
      <h3 className="invoice-section-title">Purchased Items</h3>
      <div className="invoice-items">
        {items.map(item => (
          <div key={item.id} className="invoice-item">
            <img src={item.image} alt={item.name} className="invoice-item-image" />
            <div className="invoice-item-details">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Total:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="invoice-summary">
        <h3>Summary</h3>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <p>GST: ${gst.toFixed(2)}</p>
        <p>Discount: ${discount.toFixed(2)}</p>
        <p className="final-amount"><strong>Final Paid Amount: ${finalAmount.toFixed(2)}</strong></p>
      </div>
    </div>
  );
}

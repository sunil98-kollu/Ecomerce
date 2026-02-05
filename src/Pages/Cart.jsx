import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext.jsx';
import CommonButton from '../Components/CommonComponents/CommonBotton';
import '../Components/CommonCSS/Cart.css';

export default function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalQuantity,
    getTotalPrice,
    getGST,
    getDiscount,
    getFinalAmount
  } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const invoiceId = Date.now().toString();
    const invoiceData = {
      invoiceId,
      date: new Date().toLocaleString(),
      items: cartItems,
      totalQuantity: getTotalQuantity(),
      totalPrice: getTotalPrice(),
      gst: getGST(),
      discount: getDiscount(),
      finalAmount: getFinalAmount()
    };
    cartItems.forEach(item => removeFromCart(item.id));
    navigate(`/invoice/${invoiceId}`, { state: invoiceData });
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="cart-item-actions">
                  <CommonButton text="➕" onClick={() => increaseQuantity(item.id)} />
                  <CommonButton text="➖" onClick={() => decreaseQuantity(item.id)} />
                  <CommonButton text="Delete" onClick={() => removeFromCart(item.id)} />
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Summary</h3>
            <p>Total Quantity: {getTotalQuantity()}</p>
            <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
            <p>GST (18%): ${getGST().toFixed(2)}</p>
            <p>Discount: ${getDiscount().toFixed(2)}</p>
            <p className="final-amount">Final Amount: ${getFinalAmount().toFixed(2)}</p>
            <CommonButton
              className="checkout-button"
              text="Checkout"
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
            />
          </div>
        </>
      )}
    </div>
  );
}

import React from 'react';
import { useBooks } from '../contexts/BookContext';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity } = useBooks();

  const totalPrice = cart.reduce((acc, item) => {
    return acc + (item.saleInfo?.listPrice ? item.saleInfo.listPrice.amount * item.quantity : 0);
  }, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.volumeInfo?.imageLinks?.thumbnail || 'default-thumbnail.jpg'}
                alt={item.volumeInfo?.title || 'No title'}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.volumeInfo?.title || 'No title'}</h3>
                <p>Author: {item.volumeInfo?.authors ? item.volumeInfo.authors.join(', ') : 'Unknown'}</p>
                <p>Price: ${item.saleInfo?.listPrice ? item.saleInfo.listPrice.amount.toFixed(2) : 'N/A'}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  min="1"
                  className="cart-item-quantity"
                />
                <button onClick={() => removeFromCart(item.id)} className="cart-item-remove">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
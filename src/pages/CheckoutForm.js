import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting after form submission
import { useBooks } from '../contexts/BookContext';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const { cart } = useBooks();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentInfo: '',
    paymentMethod: 'paypal',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Checkout data:', formData, cart);
    alert('Checkout successful!');
    localStorage.removeItem('cart'); // Clear cart after successful checkout
    navigate('/'); // Redirect to home page after checkout
  };

  return (
    <div className="checkout-form">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Payment Information</label>
          <input type="text" name="paymentInfo" value={formData.paymentInfo} onChange={handleChange} required />
        </div>
        <div>
          <label>Payment Method</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="paypal">PayPal</option>
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="bank_transfer">Bank Transfer</option>
          </select>
        </div>
        <div className="checkout-buttons">
          <button type="submit">Submit</button>
          <Link to="/shopping-cart">
            <button type="button">Back to Cart</button>
          </Link>
          <Link to="/">
            <button type="button">Close</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

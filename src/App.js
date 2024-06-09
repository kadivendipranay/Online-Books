import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import ShoppingCart from './pages/ShoppingCart';
import CheckoutForm from './pages/CheckoutForm';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

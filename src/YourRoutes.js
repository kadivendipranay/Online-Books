import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import CheckoutForm from './pages/CheckoutForm';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';

const YourRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default YourRoutes;

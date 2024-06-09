import React from 'react';
import { Link } from 'react-router-dom';
import { useBooks } from '../contexts/BookContext';
import { useAuth } from '../contexts/AuthContext'; // Import AuthContext
import './Header.css';

const Header = () => {
  const { cart } = useBooks();
  const { currentUser, logout } = useAuth(); // Get currentUser and logout from AuthContext

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header>
      <div className="header-content">
        <h1>Online Bookstore</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shopping-cart">Cart ({cart.length})</Link>
          {currentUser ? (
            <>
              <span>Welcome, {currentUser.email}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

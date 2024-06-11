import React, { useState } from 'react';
import { useBooks } from '../contexts/BookContext';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import '../components/BookItem.css'; // Import the BookItem.css

const Home = () => {
  const { books, addToCart, fetchBooks } = useBooks();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    fetchBooks(searchTerm);
  };

  const handleAddToCart = (book) => {
    addToCart(book);
    navigate('/shopping-cart'); // Navigate to Shopping Cart page
  };

  return (
    <div className="home-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title, author, or genre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="book-container">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <img
              src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'default-thumbnail.jpg'}
              alt={book.volumeInfo.title}
            />
            <h3>{book.volumeInfo.title}</h3>
            <p>Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
            <Link to={`/books/${book.id}`} className="details-link">View Details</Link>
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

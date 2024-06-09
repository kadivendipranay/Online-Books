// src/pages/Home.js

import React, { useState } from 'react';
import { useBooks } from '../contexts/BookContext';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const { books, addToCart } = useBooks();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter((book) =>
    book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.volumeInfo.authors?.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
    book.volumeInfo.categories?.some(category => category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <h1>Welcome to Online Bookstore!</h1>
      <p>Explore our wide range of books and start your reading journey today.</p>
      <input
        type="text"
        placeholder="Search by title, author, or genre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="book-container">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-item">
            <img
              src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''}
              alt={book.volumeInfo.title}
            />
            <h3>{book.volumeInfo.title}</h3>
            <p>Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
            <Link to={`/books/${book.id}`}>View Details</Link>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

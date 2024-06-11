// src/components/BookItem.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './BookItem.css';

const BookItem = ({ book, addToCart }) => {
  const defaultThumbnail = 'default-thumbnail.jpg';

  return (
    <motion.div
      className="book-item"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={book.volumeInfo.imageLinks?.thumbnail || defaultThumbnail}
        alt={book.volumeInfo.title}
      />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
      <div className="book-item-buttons">
        <Link to={`/books/${book.id}`} className="details-button">View Details</Link>
        <button className="cart-button" onClick={() => addToCart(book)}>Add to Cart</button>
      </div>
    </motion.div>
  );
};

export default BookItem;

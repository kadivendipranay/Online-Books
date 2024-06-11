import React from 'react';
import { motion } from 'framer-motion';
import './BookItem.css';

const BookItem = ({ book, addToCart }) => {
  const defaultThumbnail = 'default-thumbnail.jpg'; // Default image URL

  return (
    <motion.div
      className="book-item"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={book.volumeInfo.imageLinks?.thumbnail || defaultThumbnail} // Use default image if thumbnail is not available
        alt={book.volumeInfo.title}
      />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors?.join(', ') || 'Unknown Author'}</p>
      <div className="book-item-buttons">
        <button className="details-button">View Details</button>
        <button className="cart-button" onClick={() => addToCart(book)}>Add to Cart</button>
      </div>
    </motion.div>
  );
};

export default BookItem;

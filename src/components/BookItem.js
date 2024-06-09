// src/components/BookItem.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import defaultThumbnail from '../assets/default-thumbnail.jpg'; // Import the default image
import './BookItem.css';

const BookItem = ({ book, addToCart }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true); // Set image error to true if the image fails to load
  };

  return (
    <motion.div
      className="book-item"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={!imageError && book.volumeInfo.imageLinks?.thumbnail} // Use the thumbnail if no image error
        onError={handleImageError} // Handle image error
        alt={book.volumeInfo.title}
        onError={() => {this.onerror = null; this.src=defaultThumbnail}}
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

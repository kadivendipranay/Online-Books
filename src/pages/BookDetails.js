// src/pages/BookDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBooks } from '../contexts/BookContext';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books, addToCart } = useBooks();
  const book = books.find((book) => book.id === id);

  if (!book) {
    return <p>Book not found</p>;
  }

  const handleAddToCart = (book) => {
    addToCart(book);
    navigate('/shopping-cart');
  };

  return (
    <div className="book-details">
      <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'default-thumbnail.jpg'} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      <p>Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
      <p>Genre: {book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'Unknown'}</p>
      <p>Description: {book.volumeInfo.description}</p>
      <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookDetails;

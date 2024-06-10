//D:\Front End Development\Online BookStore\online-bookstore\src\pages\BookDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useBooks } from '../contexts/BookContext';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const { books, addToCart } = useBooks();
  const book = books.find((book) => book.id === id);

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div className="book-details">
      <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.volumeInfo.title} />
      <h2>{book.volumeInfo.title}</h2>
      <p>Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
      <p>Genre: {book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'Unknown'}</p>
      <p>Description: {book.volumeInfo.description}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookDetails;
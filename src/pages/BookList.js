// src/pages/BookList.js
import React, { useState, useEffect } from 'react';
import BookItem from '../components/BookItem';
import SearchBar from '../components/SearchBar';
import { fetchBooks } from '../api';
import { useCart } from '../contexts/CartContext';
import './BookList.css';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const booksData = await fetchBooks('fiction');
        setBooks(booksData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const booksData = await fetchBooks(query);
      setBooks(booksData);
      setLoading(false);
    } catch (error) {
      console.error('Error searching books:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book List</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="book-list">
        {books.map((book) => (
          <BookItem key={book.id} book={book} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default BookList;

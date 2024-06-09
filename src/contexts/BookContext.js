import React, { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext();

export const useBooks = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const fetchBooks = async (query = 'react') => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, { ...book, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: quantity > 0 ? quantity : 1 } : item
      )
    );
  };

  return (
    <BookContext.Provider value={{ books, cart, addToCart, removeFromCart, updateQuantity, fetchBooks }}>
      {children}
    </BookContext.Provider>
  );
};

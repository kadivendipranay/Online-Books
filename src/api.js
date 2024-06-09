// src/api.js
export const fetchBooks = async (query) => {
    const API_KEY = 'AIzaSyDUWHo4qmecRdDfBbUsUbExBKf41vYxRfs';
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`);
    const data = await response.json();
    return data.items;
  };
  
  export const fetchBookById = async (id) => {
    const API_KEY = 'AIzaSyDUWHo4qmecRdDfBbUsUbExBKf41vYxRfs';
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`);
    const data = await response.json();
    return data;
  };
  
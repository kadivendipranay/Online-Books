import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BookProvider } from './contexts/BookContext';
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BookProvider>
        <App />
      </BookProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

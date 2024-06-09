import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

function ProtectedRoute({ element, ...rest }) {
  const { currentUser } = useAuth();

  return <Route {...rest} element={currentUser ? element : <Navigate to="/login" replace />} />;
}

export default ProtectedRoute;

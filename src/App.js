
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { AppRoutes } from './Routes/Routes';
import { AuthProvider } from './Context/AuthContext';
import { LoadingProvider } from './Context/LoadingContext';
function App() {


  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import React from 'react';
import Home from './pages/home';

export default function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}
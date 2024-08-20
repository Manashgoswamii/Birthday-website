import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './components/HomePage.jsx';
import MemoriesPage from './components/MemoriesPage.jsx';
import WishesPage from './components/WishesPage.jsx';
import MakeAWishPage from './components/MakeAWishPage.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="/wishes" element={<WishesPage />} />
          <Route path="/make-a-wish" element={<MakeAWishPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

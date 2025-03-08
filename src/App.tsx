import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Trade from './pages/Trade';
import Education from './pages/Education';
import Challenges from './pages/Challenges';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Footer from './components/Footer';
import CartNotification from './components/CartNotification';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-neutral-50 text-neutral-900">
          <Navbar />
          <CartNotification />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/trade" element={<Trade />} />
              <Route path="/education" element={<Education />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
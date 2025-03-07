import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Trade from './pages/Trade';
import Education from './pages/Education';
import Challenges from './pages/Challenges';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-grey-50 text-neutral-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/education" element={<Education />} />
            <Route path="/challenges" element={<Challenges />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
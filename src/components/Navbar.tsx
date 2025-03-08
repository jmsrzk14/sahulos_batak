import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, User, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { cartItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomePage]);

  const navClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isHomePage
      ? isScrolled
        ? 'bg-white text-amber-900 shadow-md'
        : 'bg-transparent text-white'
      : 'bg-white text-amber-900 shadow-md'
  }`;

  const linkClasses = `hover:text-amber-500 transition-colors`;
  const iconClasses = `hover:text-amber-500 transition-colors ${
    isHomePage && !isScrolled ? 'text-white' : 'text-amber-900'
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className={`font-serif text-2xl font-bold tracking-wider ${isHomePage && !isScrolled ? 'text-white' : 'text-amber-900'}`}>
              <img 
                src="/logo.png" 
                alt="Logo"
                className="w-[170px] sm:w-50 md:w-20 lg:w-[10em] xs:ml-[-1.5em] xs:w-[10em] h-auto object-cover" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${linkClasses} ${isHomePage && !isScrolled ? 'text-white' : 'text-amber-900'}`}>Beranda</Link>
            <Link to="/products" className={`${linkClasses} ${isHomePage && !isScrolled ? 'text-white' : 'text-amber-900'}`}>Koleksi</Link>
            <Link to="/trade" className={`${linkClasses} ${isHomePage && !isScrolled ? 'text-white' : 'text-amber-900'}`}>Tukar Pakaian</Link>
            <Link to="/education" className={`${linkClasses} ${isHomePage && !isScrolled ? 'text-white' : 'text-amber-900'}`}>Edukasi</Link>
            <Link to="/challenges" className={`${linkClasses} ${isHomePage && !isScrolled ? 'text-white' : 'text-amber-900'}`}>Tantangan</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className={iconClasses} onClick={() => navigate('/login')}>
              <User size={20} />
            </button>
            <button 
              className={`${iconClasses} relative`}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={iconClasses}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4 px-4">
          <div className="flex flex-col space-y-3 pt-2 pb-3">
            <Link to="/" className="text-amber-900 hover:text-amber-500 transition-colors py-2 border-b border-amber-100">Beranda</Link>
            <Link to="/products" className="text-amber-900 hover:text-amber-500 transition-colors py-2 border-b border-amber-100">Koleksi</Link>
            <Link to="/trade" className="text-amber-900 hover:text-amber-500 transition-colors py-2 border-b border-amber-100">Tukar Pakaian</Link>
            <Link to="/education" className="text-amber-900 hover:text-amber-500 transition-colors py-2 border-b border-amber-100">Edukasi</Link>
            <Link to="/challenges" className="text-amber-900 hover:text-amber-500 transition-colors py-2 border-b border-amber-100">Tantangan</Link>
          </div>
          <div className="flex justify-end pt-4">
            <button className="text-amber-900 hover:text-amber-500 transition-colors mr-[1em]"
              onClick={() => navigate('/login')}>
              <User size={20} />
            </button>
            <button 
              className="text-amber-900 hover:text-amber-500 transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
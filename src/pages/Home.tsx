import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import Slider from "react-slick";
import Hero from "../components/Hero";
import { Product, productsData } from "../components/Products";
import { Heart, ShoppingBag } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCart } from '../context/CartContext';

const Home = () => {
  useEffect(() => {
    document.title = "Sahulos | Lestarikan Budaya Batak";
  }, []);
  const [products, setProducts] = useState<Product[]>(productsData);
  const { addToCart } = useCart();

  const toggleFavorite = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, isFavorite: !product.isFavorite } : product
      )
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative z-10">
      <Hero />
      <div className="relative bg-black py-10 inset-0 z-20">
        <div className="max-w-7xl mx-auto p-4 bg-black">
          <h1 className="text-3xl font-bold text-white text-center mb-4">
            Selamat datang di SAHULOS - Sahundulan Ulos
          </h1>
          <p className="text-white text-center mb-4">
            SAHULOS - Wear As Tradition Indonesia adalah sebuah platform yang menyediakan jual beli busana adat batak
          </p>
          <Slider {...settings} className="mt-6">
            {products.map((product) => (
              <div key={product.id} className="px-4">
                <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.isNew && (
                      <span className="absolute top-4 left-4 bg-amber-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                        Baru
                      </span>
                    )}
                    {product.stock === 0 && (
                      <span className="absolute top-4 right-4 bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                        Sold Out
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex flex-row">
                    <h3 className="text-xl font-semibold text-amber-900 mb-1 truncate">{product.name}</h3>
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-[17.3em] lg:left-[14.8em] sm:left-[31em] md:left-[18em] xs:left-[17.4em] bg-white p-2 rounded-full shadow-md hover:bg-amber-50 transition-colors"
                      >
                        <Heart
                          size={20}
                          className={product.isFavorite ? "fill-red-500 text-red-500" : "text-neutral-500"}
                        />
                      </button>
                    </div>
                    <p className="text-neutral-600 mb-3">Stok: {product.stock}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-amber-800">{formatPrice(product.price)}</span>
                      {product.stock > 0 && (
                        <button 
                          onClick={() => addToCart(product)}
                          className="flex items-center gap-2 bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-md transition-colors"
                        >
                          <ShoppingBag size={18} />
                          <span>Beli</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6">
            <Link to="/products" className="font-medium text-indigo-600 hover:text-indigo-500">
              <button className="flex items-center bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-md transition-colors">
                Lihat Semua Koleksi
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

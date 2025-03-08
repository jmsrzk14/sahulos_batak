import React, { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { Product, productsData } from "./Products";
import { useCart } from '../context/CartContext';

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>(productsData);
  const [visibleCount, setVisibleCount] = useState(9);
  const latestProducts = products.slice(0, visibleCount);
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

  return (
    <section id="products" className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
            Daftar Busana Batak
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Lihat keindahan pakaian adat Batak yang diwariskan turun temurun
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
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
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-amber-50 transition-colors"
                >
                  <Heart
                    size={20}
                    className={product.isFavorite ? "fill-red-500 text-red-500" : "text-neutral-500"}
                  />
                </button>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-amber-900 mb-1">{product.name}</h3>
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
          ))}
        </div>

        {visibleCount < products.length && (
          <div className="text-center mt-12">
            <button
              className="bg-transparent border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-3 rounded-md font-medium transition-colors"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              Tampilkan Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartNotification = () => {
  const { cartItems, removeFromCart, clearCart, isCartOpen, setIsCartOpen } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isCartOpen) return null;

  return (
    <div className="fixed right-4 top-20 sm:w-[19em] w-86 bg-white rounded-lg shadow-xl z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-amber-900">Keranjang Belanja</h3>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-400 hover:text-gray-500"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto p-4">
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-4 text-gray-500">Keranjang belanja kosong</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b border-gray-100 pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-amber-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {formatPrice(item.price)} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">Total:</span>
            <span className="font-bold text-amber-900">{formatPrice(totalPrice)}</span>
          </div>
          <button
            onClick={clearCart}
            className="w-full bg-amber-800 hover:bg-amber-900 text-white py-2 rounded-md transition-colors"
          >
            Beli Semua
          </button>
        </div>
      )}
    </div>
  );
};

export default CartNotification;
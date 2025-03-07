import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-wider text-white">WASTRA</h3>
            <p className="text-amber-200">
              Melestarikan keindahan pakaian adat Indonesia dengan sentuhan modern dan berkelanjutan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Koleksi</a></li>
              <li><a href="#trade" className="hover:text-white transition-colors">Tukar Pakaian</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Edukasi</a></li>
              <li><a href="#challenges" className="hover:text-white transition-colors">Tantangan</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Cara Pembelian</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pengiriman</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pengembalian</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>Jl. Pakaian Adat No. 123, Jakarta Pusat, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@wastra.id</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p>&copy; 2025 WASTRA. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
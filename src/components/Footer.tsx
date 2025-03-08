import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="relative bg-amber-900 text-amber-100 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-wider text-white">SAHULOS</h3>
            <p className="text-amber-200">
              Lestarikan warisan busana batak dan cintai busana warisan nenek moyang kita.
            </p>
          </div>
          
          <div className='lg:ml-[9em] xs:ml-0'>
            <h4 className="text-white font-medium mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Koleksi</Link></li>
              <li><Link to="/trade" className="hover:text-white transition-colors">Tukar Pakaian</Link></li>
              <li><Link to="/education" className="hover:text-white transition-colors">Edukasi</Link></li>
              <li><Link to="/challenges" className="hover:text-white transition-colors">Tantangan</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <img 
                src="/logo.png" 
                alt="Logo"
                className="w-[170px] sm:w-[20em] sm:hidden md:w-20 lg:inline-block lg:w-[30em] lg:mt-[-6em] lg:mb-[-10em] xs:hidden h-auto object-cover" 
              />
          </div>
          
          {/* <div>
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
          </div> */}
        </div>
        <div className="border-t border-amber-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p>&copy; All Rights Reserved 2025 | SAHULOS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
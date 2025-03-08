import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[100vh] overflow-hidden">
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/bg2.jpg')",
          filter: "brightness(0.5)",
        }}
      ></div> */}
      <div className="fixed inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
          Browser Anda tidak mendukung video.
        </video>
        <div className="absolute inset-0 bg-black opacity-[88%]"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-wide">
          Horas!
        </h1>
        <p className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl">
          Mari kita lestarikan budaya batak dengan mencintai busananya
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => navigate('/products')}
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-md font-medium transition-colors shadow-lg"
          >
            Jelajahi Koleksi
          </button>
          <button 
            onClick={() => navigate('/trade')}
            className="bg-transparent border-2 border-amber-100 text-amber-100 hover:bg-amber-100/20 px-8 py-3 rounded-md font-medium transition-colors shadow-lg"
          >
            Tukar Pakaian
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
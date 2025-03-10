import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Leaf, Droplet, Recycle } from 'lucide-react';

const EcoEducation = () => {
  useEffect(() => {
        document.title = "Sahulos | Edukasi Budaya Batak";
    }, []);
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-grey-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
            <Book size={28} className="text-amber-800" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">Edukasi Busana Batak</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Pelajari bagaimana pakaian adat Batak dapat menjadi bagian dari gerakan fashion yang ramah lingkungan dan berkelanjutan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/ulos_edu.jpeg" 
              alt="Sustainable Fashion" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Bahan Pembuatan Ulos</h3>
              <p className="text-amber-100 mb-4">
                Bahan untuk membuat ulos adalah bahan-bahan yang ramah ramah lingkungan.
              </p>
              <Link to="https://www.detik.com/edu/detikpedia/d-5817187/mengenal-ulos-kain-tenun-khas-suku-batak-yang-penuh-makna" className="font-medium text-indigo-600 hover:text-indigo-500">
                <button className="bg-white text-amber-900 hover:bg-amber-100 px-6 py-2 rounded-md font-medium transition-colors self-start">
                  Baca Selengkapnya
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">Prinsip Pembuatan Ulos</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Leaf size={24} className="text-amber-800" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-amber-900">Bahan Alami</h4>
                    <p className="text-neutral-600">
                      Ulos Batak umumnya menggunakan bahan alami seperti benang. Benang yang digunakan berasal dari sutra dan juga dari kapas.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Droplet size={24} className="text-amber-800" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-amber-900">Pewarna Alami</h4>
                    <p className="text-neutral-600">
                      Pewarna pada ulos berasal dari kunyit, abu kayu, kulit kayu dan juga dari daun tayom.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Recycle size={24} className="text-amber-800" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg text-amber-900">Daur Ulang & Tukar</h4>
                    <p className="text-neutral-600">
                      Memperpanjang masa penggunaan melalui penukaran dan perawatan yang baik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-amber-100">
              <button className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 rounded-md font-medium transition-colors">
                Ikuti Kelas Online Kami
              </button>
            </div>
          </div>
        </div>

        <div className="bg-amber-800 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Panduan Merawat Warisan Busana Batak</h3>
              <p className="text-amber-100 mb-6">
                Pelajari cara merawat pakaian adat batak dengan benar untuk memperpanjang umur dan menjaga keindahannya. Perawatan yang tepat adalah kunci melestarikan warisan budaya batak.
              </p>
              <Link to="https://youtu.be/jpTDKBztWTg?si=nyE_uhWeE1_NXMmm" className="font-medium text-indigo-600 hover:text-indigo-500">
                <button className="mt-6 bg-white text-amber-900 hover:bg-amber-100 px-6 py-3 rounded-md font-medium transition-colors self-start">
                  Tonton Video
                </button>
              </Link>
            </div>
            <div className="h-full">
              <img 
                src="/tenun_edu.jpg" 
                alt="Tenun" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoEducation;
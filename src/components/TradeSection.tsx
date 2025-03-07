import React, { useState } from 'react';
import { ArrowLeftRight, Upload, ArrowRight } from 'lucide-react';

interface TradeItem {
  id: number;
  name: string;
  condition: string;
  owner: string;
  image: string;
  description: string;
}

const TradeSection = () => {
  const [tradeItems, setTradeItems] = useState<TradeItem[]>([
    {
      id: 1,
      name: "Batik Mega Mendung",
      condition: "Sangat Baik",
      owner: "Anisa W.",
      image: "https://images.unsplash.com/photo-1528822855841-e8bf3134cdc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Batik Mega Mendung asli Cirebon, dipakai 2x untuk acara formal. Ukuran L, bahan katun premium."
    },
    {
      id: 2,
      name: "Tenun Rangrang Bali",
      condition: "Baik",
      owner: "Putu S.",
      image: "https://images.unsplash.com/photo-1596297063817-78e4c0a21b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Kain tenun Bali motif Rangrang, sudah 1 tahun, masih dalam kondisi baik. Cocok untuk upacara adat."
    },
    {
      id: 3,
      name: "Kebaya Encim Hijau",
      condition: "Seperti Baru",
      owner: "Maya D.",
      image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Kebaya Encim warna hijau zamrud, baru dipakai sekali untuk wisuda. Ukuran M, bordir tangan."
    }
  ]);

  return (
    <section id="trade" className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
            <ArrowLeftRight size={28} className="text-amber-800" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">Tukar & Jual Pakaian Batak Disini</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Berpartisipasilah dalam gerakan melestarikan budaya batak dengan tukan menukar dan jual beli pakaian batak dengan pakaian batak lain yang Anda butuhkan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-amber-900 mb-[1.5em]">Cara Kerja Transaksi Pakaian</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-800 text-white rounded-full flex items-center justify-center font-semibold">1</span>
                  <div>
                    <h4 className="font-medium text-lg text-amber-900">Unggah Pakaian Anda</h4>
                    <p className="text-neutral-600">Foto dan deskripsikan pakaian adat yang ingin Anda tukarkan</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-800 text-white rounded-full flex items-center justify-center font-semibold">2</span>
                  <div>
                    <h4 className="font-medium text-lg text-amber-900">Temukan Penawaran</h4>
                    <p className="text-neutral-600">Cari pakaian yang Anda minati atau tunggu tawaran dari pengguna lain</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-800 text-white rounded-full flex items-center justify-center font-semibold">3</span>
                  <div>
                    <h4 className="font-medium text-lg text-amber-900">Setujui Transaksi</h4>
                    <p className="text-neutral-600">Diskusikan detail dan setujui transaksi yang menguntungkan kedua belah pihak</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-800 text-white rounded-full flex items-center justify-center font-semibold">4</span>
                  <div>
                    <h4 className="font-medium text-lg text-amber-900">Kirim & Terima</h4>
                    <p className="text-neutral-600">Kirim pakaian Anda dan terima pakaian baru dari pengguna lain</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="px-6 py-4 bg-amber-100 mt-[4.6em]">
              <button className="w-full bg-amber-800 hover:bg-amber-900 text-white flex items-center justify-center gap-2 py-3 rounded-md font-medium transition-colors">
                <Upload size={18} />
                <span>Unggah Pakaian</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">Pakaian Tersedia untuk Ditukar</h3>
              <div className="space-y-4">
                {tradeItems.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b border-neutral-200 last:border-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-amber-900">{item.name}</h4>
                      <p className="text-sm text-neutral-500">Kondisi: {item.condition}</p>
                      <p className="text-sm text-neutral-500">Pemilik: {item.owner}</p>
                      <button className="mt-2 text-amber-800 hover:text-amber-900 text-sm font-medium flex items-center gap-1">
                        Lihat Detail <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-6 py-4 bg-amber-100">
              <button className="w-full border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white flex items-center justify-center gap-2 py-3 rounded-md font-medium transition-colors">
                Lihat Semua Penawaran
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeSection;
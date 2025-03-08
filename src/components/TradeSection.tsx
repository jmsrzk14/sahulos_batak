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
      name: "Kebaya Ulos Siallagan",
      condition: "Sangat Baik",
      owner: "Risna S.",
      image: "https://i.pinimg.com/736x/92/1f/86/921f86dc5a5ddfb7700091de337b2bc8.jpg",
      description: "Kebaya tradisional Batak menggunakan Ulos Siallagan, dipakai dalam acara adat. Bahan sutra halus."
    },
    {
      id: 2,
      name: "Setelan Jas Ulos Batak Sumba",
      condition: "Baik",
      owner: "Benny K.",
      image: "https://i.pinimg.com/736x/b2/42/5d/b2425d704d6fd79fbed5817ab4d9a20a.jpg",
      description: "Setelan jas pria berbahan Ulos Batak Sumba, sangat cocok untuk acara formal atau pernikahan adat."
    },
    {
      id: 3,
      name: "Dress Batik Ulos Si Gale-Gale",
      condition: "Seperti Baru",
      owner: "Sari A.",
      image: "https://i.pinimg.com/736x/15/9f/dc/159fdc31c4e42385f6009b964b2ca3d8.jpg",
      description: "Dress batik wanita dengan aksen Ulos Si Gale-Gale, cocok untuk acara perayaan adat. Bahan tenun tradisional."
    },
    {
      id: 4,
      name: "Pakaian Pengantin Ulos Pandiangan",
      condition: "Baik",
      owner: "Johan H.",
      image: "https://down-id.img.susercontent.com/file/9103ab6d449c1c567c658cb76a479697",
      description: "Pakaian pengantin adat Batak dengan aksen Ulos Pandiangan. Bahan nyaman dan elegan untuk acara pernikahan."
    },
    {
      id: 5,
      name: "Blouse Ulos Batak Simarotun",
      condition: "Sangat Baik",
      owner: "Dian T.",
      image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/7/22/65621a36-29f0-448d-895e-b508f417fbf0.jpg",
      description: "Blouse modern menggunakan Ulos Batak Simarotun, baru dipakai sekali dalam acara adat. Bahan katun premium."
    },
    {
      id: 6,
      name: "Baju Kurung Ulos Dolom Sihotang",
      condition: "Baik",
      owner: "Maya P.",
      image: "https://down-id.img.susercontent.com/file/9ac793c06bb5773099bd370581b97d29",
      description: "Baju kurung Batak dengan aksen Ulos Dolom Sihotang, sangat cocok untuk acara resmi dan adat."
    },
    {
      id: 7,
      name: "Outer Ulos Sinambela",
      condition: "Seperti Baru",
      owner: "Rosma P.",
      image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/93/MTA-173342145/no-brand_no-brand_full01.jpg",
      description: "Outer wanita berbahan Ulos Sinambela, baru dipakai sekali untuk acara adat. Motif dan desain unik."
    },
    {
      id: 8,
      name: "Setelan Wanita Ulos Batak Siallagan",
      condition: "Baik",
      owner: "Rudi D.",
      image: "https://img.lazcdn.com/g/p/b12b72a1289e47fdbed4d8a280882e69.jpg_720x720q80.jpg_.webp",
      description: "Setelan wanita dengan desain modern menggunakan Ulos Batak Siallagan, cocok untuk acara formal dan adat."
    },
    {
      id: 9,
      name: "Pakaian Tradisional Ulos Parompa",
      condition: "Sangat Baik",
      owner: "Miko S.",
      image: "https://cnc-magazine.oramiland.com/parenting/images/toba.width-800.format-webp_ltkY0aO.webp",
      description: "Pakaian tradisional Batak dengan aksen Ulos Parompa, baru dipakai sekali untuk acara adat."
    },
    {
      id: 10,
      name: "Setelan Jas Pengantin Ulos Toba",
      condition: "Baik",
      owner: "Sandi A.",
      image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/115/MTA-158882848/no-brand_no-brand_full25.jpg",
      description: "Setelan jas pengantin pria menggunakan Ulos Toba Batak, sangat cocok untuk acara pernikahan adat. Kondisi baik."
    },
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
import React, { useState } from 'react';
import { Award, CheckCircle, Clock, Users } from 'lucide-react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  duration: string;
  participants: number;
  image: string;
  completed: boolean;
}

const Challenges = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 1,
      title: "30 Hari Tanpa Beli Baju Baru",
      description: "Tantangan untuk tidak membeli pakaian baru selama 30 hari dan memanfaatkan pakaian yang sudah ada.",
      duration: "30 hari",
      participants: 1245,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      completed: false
    },
    {
      id: 2,
      title: "Tukar 5 Pakaian Dalam 2 Bulan",
      description: "Tukarkan minimal 5 pakaian yang tidak terpakai dengan pakaian lain dari komunitas.",
      duration: "60 hari",
      participants: 876,
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      completed: false
    },
    {
      id: 3,
      title: "Kenakan Pakaian Adat Setiap Jumat",
      description: "Gunakan pakaian adat atau elemen tradisional setiap hari Jumat untuk mempromosikan budaya.",
      duration: "3 bulan",
      participants: 2134,
      image: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      completed: false
    }
  ]);

  const toggleChallengeCompletion = (id: number) => {
    setChallenges(challenges.map(challenge => 
      challenge.id === id ? { ...challenge, completed: !challenge.completed } : challenge
    ));
  };

  return (
    <section id="challenges" className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
            <Award size={28} className="text-amber-800" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">Tantangan Berkelanjutan</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Bergabunglah dengan komunitas kami dalam tantangan untuk mengurangi konsumsi fashion dan mempromosikan gaya hidup yang lebih berkelanjutan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={challenge.image} 
                  alt={challenge.title} 
                  className="w-full h-full object-cover"
                />
                {challenge.completed && (
                  <div className="absolute inset-0 bg-amber-900/70 flex items-center justify-center">
                    <div className="bg-white rounded-full p-3">
                      <CheckCircle size={40} className="text-amber-600" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{challenge.title}</h3>
                <p className="text-neutral-600 mb-4">{challenge.description}</p>
                
                <div className="flex justify-between text-sm text-neutral-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{challenge.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{challenge.participants.toLocaleString()} peserta</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => toggleChallengeCompletion(challenge.id)}
                  className={`w-full py-2 rounded-md font-medium transition-colors ${
                    challenge.completed 
                      ? "bg-amber-100 text-amber-800 border-2 border-amber-800" 
                      : "bg-amber-800 text-white hover:bg-amber-900"
                  }`}
                >
                  {challenge.completed ? "Tantangan Selesai" : "Ikuti Tantangan"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Buat Tantangan Anda Sendiri</h3>
              <p className="text-neutral-600 mb-6">
                Punya ide untuk tantangan fashion berkelanjutan? Ajak komunitas untuk bergabung dalam misi Anda untuk fashion yang lebih ramah lingkungan.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="challenge-title" className="block text-sm font-medium text-neutral-700 mb-1">
                    Judul Tantangan
                  </label>
                  <input 
                    type="text" 
                    id="challenge-title" 
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Contoh: 10 Hari Pakai Ulang Pakaian"
                  />
                </div>
                
                <div>
                  <label htmlFor="challenge-desc" className="block text-sm font-medium text-neutral-700 mb-1">
                    Deskripsi
                  </label>
                  <textarea 
                    id="challenge-desc" 
                    rows={3}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Jelaskan tantangan Anda secara detail..."
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="challenge-duration" className="block text-sm font-medium text-neutral-700 mb-1">
                    Durasi
                  </label>
                  <select 
                    id="challenge-duration" 
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="7">7 hari</option>
                    <option value="14">14 hari</option>
                    <option value="30">30 hari</option>
                    <option value="60">60 hari</option>
                    <option value="90">90 hari</option>
                  </select>
                </div>
                
                <button type="submit" className="w-full bg-amber-800 hover:bg-amber-900 text-white py-3 rounded-md font-medium transition-colors">
                  Buat Tantangan
                </button>
              </form>
            </div>
            
            <div className="bg-amber-800 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">Manfaat Mengikuti Tantangan</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-bold text-sm">1</span>
                  </div>
                  <p className="text-amber-100">Mengurangi jejak karbon dan dampak lingkungan dari industri fashion</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-bold text-sm">2</span>
                  </div>
                  <p className="text-amber-100">Menghemat uang dengan memanfaatkan pakaian yang sudah dimiliki</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-bold text-sm">3</span>
                  </div>
                  <p className="text-amber-100">Menjadi bagian dari komunitas yang peduli terhadap keberlanjutan</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-bold text-sm">4</span>
                  </div>
                  <p className="text-amber-100">Mendapatkan hadiah dan pengakuan dari komunitas WASTRA</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
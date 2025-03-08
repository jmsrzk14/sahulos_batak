import React, { useState } from 'react';
import { Award, CheckCircle, Clock, Users } from 'lucide-react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  duration: string;
  image: string;
  completed: boolean;
}

const Challenges = () => {
  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 1,
      title: "Memakai ulos setiap acara adat",
      description: "Tantangan untuk selalu menggunakan ulos saat diundang di acara adat tertentu.",
      duration: "30 hari",
      image: "https://awsimages.detik.net.id/community/media/visual/2020/10/18/serba-serbi-kain-ulos-1_169.jpeg?w=1200",
      completed: false
    },
    {
      id: 2,
      title: "Berpatisipasi dalam pembuatan ulos",
      description: "Ikut serta dalam membantu penenun olus dalam pembuatan ulos.",
      duration: "60 hari",
      image: "https://i0.wp.com/www.infobudaya.net/wp-content/uploads/2021/05/Ulos.jpg?fit=602%2C349&ssl=1",
      completed: false
    },
    {
      id: 3,
      title: "Hari Ulos Nasional Challenge",
      description: "Gunakan Ulos pada Hari Ulos Nasional dan unggah di media sosial.",
      duration: "90 hari",
      image: "https://tobaria.com/wp-content/uploads/2020/10/hari-ulos-1.png",
      completed: false
    }
  ]);

  const [newChallenge, setNewChallenge] = useState({
    title: "",
    description: "",
    duration: "7 hari",
    image: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setNewChallenge({ ...newChallenge, [id]: value });
  };

  const handleAddChallenge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChallenge.title || !newChallenge.description) return;

    const newEntry: Challenge = {
      id: challenges.length + 1,
      title: newChallenge.title,
      description: newChallenge.description,
      duration: newChallenge.duration,
      image: newChallenge.image, 
      completed: false
    };

    setChallenges([...challenges, newEntry]);
    setNewChallenge({ title: "", description: "", duration: "7 hari", image: "" });
  };

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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">Tantangan Menjaga Warisan Budaya</h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Ikut serta dalam tantangan untuk menjaga warisan budaya batak dalam bidang busana agar kelestarian busana budaya batak tetap terjaga
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
                <div className="flex justify-end text-sm text-neutral-500 mb-4">
                  <Clock size={16} />
                  <span>{challenge.duration}</span>
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

        <form className="bg-white rounded-lg shadow-lg p-8" onSubmit={handleAddChallenge}>
          <h3 className="text-2xl font-bold text-amber-900 mb-4">Buat Tantangan Anda Sendiri</h3>
          <input type="text" id="title" value={newChallenge.title} onChange={handleInputChange} placeholder="Judul Tantangan" className="w-full px-4 py-2 border rounded-md mb-4" />
          <textarea id="description" value={newChallenge.description} onChange={handleInputChange} placeholder="Deskripsi" className="w-full px-4 py-2 border rounded-md mb-4"></textarea>
          <select id="duration" value={newChallenge.duration} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md mb-4">
            <option value="7">7 hari</option>
            <option value="14">14 hari</option>
            <option value="30">30 hari</option>
            <option value="60">60 hari</option>
            <option value="90">90 hari</option>
          </select>
          <input type="text" id="image" value={newChallenge.image} onChange={handleInputChange} placeholder="Link Photo" className="w-full px-4 py-2 border rounded-md mb-4" />
          <button type="submit" className="w-full bg-amber-800 text-white py-3 rounded-md">Buat Tantangan</button>
        </form>
      </div>
    </section>
  );
};

export default Challenges;
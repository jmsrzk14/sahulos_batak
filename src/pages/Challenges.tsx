import React, { useState, useEffect } from 'react';
import ChallengesSection from '../components/Challenges';

const Challenges = () => {
  useEffect(() => {
    document.title = "Sahulos | Tantangan ";
  }, []);
  return (
    <div className="pt-16">
      <ChallengesSection />
    </div>
  );
};

export default Challenges;
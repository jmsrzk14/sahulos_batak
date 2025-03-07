import React, { useState, useEffect } from "react";
import TradeSection from '../components/TradeSection';

const Trade = () => {
  useEffect(() => {
    document.title = "WASTRA | Tukar & Jual Pakaian";
  }, []);
  return (
    <div className="pt-16">
      <TradeSection />
    </div>
  );
};

export default Trade;
import React, { useState, useEffect } from "react";
import FeaturedProducts from '../components/FeaturedProducts';

const Products = () => {
  useEffect(() => {
      document.title = "Sahulos | Daftar Busana Batak";
    }, []);
  return (
    <div className="pt-16">
      <FeaturedProducts />
    </div>
  );
};

export default Products;
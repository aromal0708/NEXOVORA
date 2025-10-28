import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductsPreview from "../components/ProductsPreview";
import CTA from "../components/CTA";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <div className="relative overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0F044C]/20 to-black">
          <div className="space-bg opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"></div>
        </div>
        <Features />
        <ProductsPreview />
        <CTA />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductsPreview from "../components/ProductsPreview";
import CTA from "../components/CTA";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Hero />
      <Features />
      <ProductsPreview />
      <CTA />
    </div>
  );
};

export default Home;

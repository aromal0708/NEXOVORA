import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Products from './pages/Products.tsx';
import Careers from './pages/Careers.tsx';
import Contact from './pages/Contact.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary text-accent">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

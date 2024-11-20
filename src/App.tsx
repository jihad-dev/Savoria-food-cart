import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import Testimonials from './components/Testimonials';
import SpecialOffers from './components/SpecialOffers';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <FeaturedDishes />
      <Testimonials />
      <SpecialOffers />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
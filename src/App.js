import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import HeadlineCard from './Components/HeadlineCard';
import Food from './Components/Food';
import Category from './Components/Category';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Category />
      <Footer />
    </div>
  );
}

export default App;

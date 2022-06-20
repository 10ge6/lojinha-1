import React from 'react';
import Hero from '../components/Hero';
import ProductFilter from '../components/ProductFilter';
import Modal from '../components/Modal';

function Home() {
   return (
      <div>
         <Hero />
         <ProductFilter />
         <Modal />
      </div>
   );
}

export default Home;

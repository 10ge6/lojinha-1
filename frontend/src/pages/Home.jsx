import React from 'react';
import Hero from '../components/Hero';
import ProductFilter from '../components/ProductFilter';
import Modal from '../components/Modal';

function Home() {
   return (
      <div>
         <Hero />
         <ProductFilter />
         <Modal url='http://localhost:4000/storefront/109' />
      </div>
   );
}

export default Home;

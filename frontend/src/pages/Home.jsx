import React from 'react';
import Hero from '../components/Hero';
import ProductFilter from '../components/ProductFilter';
import ProductSection from '../components/ProductSection';

function Home() {
   return (
      <div>
         <Hero />
         <ProductFilter />
         <ProductSection urlFetch={''} />
      </div>
   );
}

export default Home;

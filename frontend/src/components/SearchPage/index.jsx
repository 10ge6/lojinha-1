import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductList } from '../ProductSection';
import { Section } from '../../styles/Global';
import Modal from '../Modal';

function SearchPage() {
   const [searchParams, setSearchParams] = useSearchParams();
   const [url, setUrl] = useState(`?query=${searchParams.get('query') || ''}`);
   const [modal, setModal] = useState(false);

   function closeModal() {
      setModal(false);
   }

   function openModal() {
      setModal(true);
   }

   return (
      <Section>
         <Modal visible={modal} url={url} closeModal={closeModal} />
         <ProductList urlFetch={url} setUrl={setUrl} openModal={openModal} />
      </Section>
   );
}

export default SearchPage;

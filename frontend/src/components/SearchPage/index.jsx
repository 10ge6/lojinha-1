import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductList } from '../ProductSection';
import { Section } from '../../styles/Global';
import Modal from '../Modal';
import * as S from './styles';

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
         <S.Title>Resultados de "{searchParams.get('query')}"</S.Title>
         <Modal visible={modal} url={url} closeModal={closeModal} />
         <S.Products>
            <ProductList urlFetch={url} setUrl={setUrl} openModal={openModal} />
         </S.Products>
      </Section>
   );
}

export default SearchPage;

import React, { useState } from 'react';
import { Section } from '../../styles/Global';
import * as S from './styles';
import closeBtn from '../../assets/closeBtn.svg';
import { useEffect } from 'react';

function Modal({ url }) {
   const [modal, setModal] = useState(false);

   function TrueModal({ visible }) {
      const [modalData, setModalData] = useState([]);

      const getData = async () => {
         const response = await fetch(url);
         const data = await response.json();
         return data.response[0];
      };

      useEffect(() => {
         getData().then((data) => setModalData(data));
      }, [url]);

      if (visible) {
         return (
            <S.ModalBg>
               <S.Modal>
                  <S.TopSideModal>
                     <S.Title>{modalData.product_title}</S.Title>
                     <S.CloseBtn onClick={() => setModal(false)}>
                        <img src={closeBtn} alt='Botão de fechar modal' />
                     </S.CloseBtn>
                  </S.TopSideModal>
                  <S.Content>
                     <S.Categories>
                        <S.Category>
                           <S.CategoryTitle>Descrição</S.CategoryTitle>
                           <S.CategoryContent>{modalData.product_desc}</S.CategoryContent>
                        </S.Category>
                        <S.Category>
                           <S.CategoryTitle>Vendedor</S.CategoryTitle>
                           <S.CategoryContent>RickRoll</S.CategoryContent>
                        </S.Category>
                        <S.Category>
                           <S.CategoryTitle>Marca</S.CategoryTitle>
                           <S.CategoryContent>{modalData.product_brand}</S.CategoryContent>
                        </S.Category>
                        <S.Category>
                           <S.CategoryTitle>Cor</S.CategoryTitle>
                           <S.CategoryContent>{modalData.product_color}</S.CategoryContent>
                        </S.Category>
                        <S.Price>{(modalData.product_price / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</S.Price>
                     </S.Categories>
                     <div>
                        <S.Img
                           src={modalData.product_pic}
                           onError={({ currentTarget }) => {
                              currentTarget.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
                           }}
                           alt='Imagem do produto'
                        />
                     </div>
                  </S.Content>
               </S.Modal>
            </S.ModalBg>
         );
      }
   }

   return (
      <Section>
         <S.Button onClick={() => setModal(!modal)}>Abrir modal</S.Button>
         <TrueModal visible={modal} />
      </Section>
   );
}

export default Modal;

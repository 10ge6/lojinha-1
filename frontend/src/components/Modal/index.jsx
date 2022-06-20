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
                  <div>
                     <h1>{modalData.product_title}</h1>
                     <S.Button onClick={() => setModal(false)}>
                        <img src={closeBtn} alt='Botão de fechar modal' />
                     </S.Button>
                  </div>
                  <div>
                     <div>
                        <div>
                           <h2>Descrição</h2>
                           <p>{modalData.product_desc}</p>
                        </div>
                        <div>
                           <h2>Vendedor</h2>
                           <p>RickRoll</p>
                        </div>
                        <div>
                           <h2>Marca</h2>
                           <p>{modalData.product_brand}</p>
                        </div>
                        <div>
                           <h2>Cor</h2>
                           <p>{modalData.product_color}</p>
                        </div>
                        <h2>{(modalData.product_price / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h2>
                     </div>
                     <div>
                        <img
                           src={modalData.product_pic}
                           onError={({ currentTarget }) => {
                              currentTarget.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
                           }}
                           alt='Imagem do produto'
                        />
                     </div>
                  </div>
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

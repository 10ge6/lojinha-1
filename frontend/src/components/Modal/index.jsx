import React, { useState } from 'react';
import * as S from './styles';
import closeBtn from '../../assets/closeBtn.svg';
import { useEffect } from 'react';
import minus from '../../assets/minusBtn.svg';
import plus from '../../assets/plusBtn.svg';
import edit from '../../assets/editBtn.svg';
import erase from '../../assets/deleteBtn.svg';

function Modal({ visible, url, setVisible }) {
   const [modalData, setModalData] = useState([]);
   const [count, setCount] = useState(1);

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
                  <S.CloseBtn
                     onClick={() => {
                        setCount(1);
                        setVisible(false);
                     }}
                  >
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
                  <S.ImgAndQuantities>
                     <S.Img
                        src={modalData.product_pic}
                        onError={({ currentTarget }) => {
                           currentTarget.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
                        }}
                        alt='Imagem do produto'
                     />
                     <S.QuantitiesBox>
                        <S.Button
                           onClick={() => {
                              if (count > 1) {
                                 setCount((count) => count - 1);
                              }
                           }}
                        >
                           <img src={minus} alt='Botão de diminuir quantidade' />
                        </S.Button>
                        <S.Quantities>{count}</S.Quantities>
                        <S.Button onClick={() => setCount((count) => count + 1)}>
                           <img src={plus} alt='Botão de aumentar quantidade' />
                        </S.Button>
                     </S.QuantitiesBox>
                  </S.ImgAndQuantities>
               </S.Content>
               <S.BottomBtns>
                  <S.EditDelBtns>
                     <S.EditBtn>
                        <S.EditDelImgs src={edit} alt='Botão de editar' />
                        <h1>Editar</h1>
                     </S.EditBtn>
                     <S.DelBtn>
                        <S.EditDelImgs src={erase} alt='Botão de deletar' />
                        <h1>Deletar</h1>
                     </S.DelBtn>
                  </S.EditDelBtns>
                  <S.CartAddBtn>Adicionar ao carrinho</S.CartAddBtn>
               </S.BottomBtns>
            </S.Modal>
         </S.ModalBg>
      );
   }
}

export default Modal;

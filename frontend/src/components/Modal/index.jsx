import React, { useState } from 'react';
import { Section } from '../../styles/Global';
import * as S from './styles';
import closeBtn from '../../assets/closeBtn.svg';

function Modal() {
   const [modal, setModal] = useState(false);

   function TrueModal({ visible }) {
      if (visible) {
         return (
            <S.ModalBg>
               <S.Modal>
                  <S.Button onClick={() => setModal(false)}>
                     <img src={closeBtn} alt='Botão de fechar modal' />
                  </S.Button>
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

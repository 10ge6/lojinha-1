import React, { useState } from 'react';
import { Section } from '../../styles/Global';
import * as S from './styles';

function Modal() {
   const [modal, setModal] = useState(false);
   return (
      <Section>
         <button
            onClick={() => {
               setModal(!modal);
               console.log(modal);
            }}
         >
            Abrir modal
         </button>
      </Section>
   );
}

export default Modal;

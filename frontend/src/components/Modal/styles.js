import styled from 'styled-components';

export const Button = styled.button`
   cursor: pointer;
`;

export const ModalBg = styled.div`
   position: fixed;
   margin: auto;
   display: flex;
   justify-content: center;
   align-items: center;
   right: 0;
   left: 0;
   top: 0;
   bottom: 0;
   width: 100%;
   height: 100%;
   background-color: #2ae89ccf;
`;

export const Modal = styled.div`
   width: 60%;
   height: 80%;
   padding: 100px 112px;
   background-color: #fafafa;
`;

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
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   background-color: #2ae89ccf;
`;

export const Modal = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 40px;
   width: 100%;
   height: 100%;
   padding: 50px 66px;
   border-radius: 20px;
   background-color: #fafafa;
   @media (max-height: 954px) {
      overflow-y: scroll;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
   }
   @media (max-width: 1040px) {
      padding: 44px 36px;
   }
   @media (max-width: 768px) {
      border-radius: 0;
      position: fixed;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      overflow-y: scroll;
      gap: 60px;
      padding: 20px;
   }
`;

export const TopSideModal = styled.div`
   display: grid;
   grid-template-columns: 30px 1fr 30px;
   @media (max-width: 768px) {
      grid-template-rows: max-content max-content;
   }
`;

export const CloseBtn = styled.button`
   cursor: pointer;
   grid-column: 3;
   justify-self: center;
`;

export const Title = styled.h1`
   font-family: 'Montserrat';
   text-align: center;
   font-size: 24px;
   color: #252822;
   font-weight: 500;
   grid-column: 2;
   justify-self: center;
   align-self: center;

   @media (max-width: 768px) {
      grid-row: 2;
      font-size: 25px;
   }
`;

export const Content = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 100px;
   height: 100%;

   @media (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: center;
      gap: 65px;
   }
`;

export const Categories = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   justify-content: space-between;

   @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
      gap: 60px;
      text-align: center;
   }
`;

export const Category = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;

   @media (max-width: 768px) {
      align-items: center;
   }
`;

export const CategoryTitle = styled.h2`
   font-weight: 600;
   font-size: 30px;

   @media (max-width: 1300px) {
      font-size: 22px;
   }
`;

export const CategoryContent = styled.p`
   font-weight: 400;
   font-size: 20px;
   font-family: 'Montserrat';

   @media (max-width: 1300px) {
      font-size: 14px;
   }

   @media (max-width: 768px) {
      font-size: 16px;
   }
`;

export const Price = styled.h2`
   font-weight: 600;
   font-size: 40px;
   color: #275845;
`;

export const Img = styled.img`
   width: 350px;
   height: 350px;
   object-fit: cover;
   border-radius: 2px;

   @media (max-width: 450px) {
      width: 80vw;
      height: 80vw;
   }
`;

export const QuantitiesBox = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   justify-content: space-evenly;

   @media (max-width: 768px) {
      justify-content: center;
      gap: 20px;
   }
`;

export const Quantities = styled.p`
   font-size: 30px;
   font-weight: 700;

   @media (max-width: 768px) {
      font-size: 20px;
   }
`;

export const ImgAndQuantities = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 15px;
   width: 348px;
   @media (max-width: 450px) {
      width: 80vw;
   }
`;

export const EditBtn = styled.button`
   display: flex;
   align-items: center;
   color: #53b38d;
   gap: 12px;
   font-size: 20px;
   cursor: pointer;

   @media (max-width: 768px) {
      font-size: 25px;
   }

   @media (max-width: 480px) {
      font-size: 20px;
   }
`;

export const DelBtn = styled.button`
   display: flex;
   align-items: center;
   color: #f24e1e;
   cursor: pointer;
`;

export const BtnText = styled.h3`
   font-size: 30px;
   @media (max-width: 400px) {
      font-size: 25px;
   }
`;

export const CartAddBtn = styled.button`
   padding: 12px 0;
   border-radius: 5px;
   background-color: #53b38d;
   color: #f8f8f8;
   font-size: 20px;
   width: 300px;
   cursor: pointer;
   border: solid 1px #53b38d;

   :hover {
      background-color: #f8f8f8;
      color: #53b38d;
      transition: 0.3s;
   }

   @media (max-width: 768px) {
      width: 100%;
      max-width: none;
   }

   @media (max-height: 1020px) {
      align-self: center;
   }
`;

export const EditDelBtns = styled.div`
   display: flex;
   gap: 32px;
`;

export const BottomBtns = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 25px;
   margin-top: 20px;

   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 54px;
   }
`;

export const EditDelImgs = styled.img`
   height: 45px;

   @media (max-width: 480px) {
      height: 27px;
   }
`;

export const RadioInputDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const RadioInputsDiv = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   width: 100%;
   gap: 20px;
`;

export const RadioInput = styled.input`
   appearance: none;

   display: flex;
   align-items: center;
   justify-content: center;
   padding: 5px;
   min-width: 40px;
   border: solid 2px #275845;
   transition: 0.3s;
   border-radius: 5px;
   background-color: #f8f8f8;

   ::before {
      content: attr(value);
      font-size: 15px;
      color: #53b38d;
   }

   :checked {
      border: solid 2px #53b38d;
      background-color: #53b38d;
   }

   :checked::before {
      color: #f8f8f8;
   }
`;

export const InputLabel = styled.label`
   text-align: center;
   color: #53b38d;
`;

export const CountBtns = styled.img`
   @media (max-width: 768px) {
      height: 30px;
   }
`;

export const CloseImg = styled.img`
   @media (max-width: 450px) {
      width: 20px;
   }
`;

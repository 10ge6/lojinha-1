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
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   gap: 40px;
   width: 65%;
   height: 90%;
   padding: 50px 66px;
   border-radius: 20px;
   background-color: #fafafa;
   @media (max-height: 954px) {
      height: 100%;
      overflow-y: scroll;
      display: grid;
      grid-template-rows: auto auto auto;
   }
   @media (max-width: 1540px) {
      width: 80%;
   }
   @media (max-width: 1040px) {
      width: 95%;
      padding: 44px 36px;
   }
   @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      position: fixed;
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      overflow-y: scroll;
      gap: 60px;
   }
   @media (max-width: 400px) {
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
   font-size: 36px;
   color: #252822;
   font-weight: 500;
   grid-column: 2;
   justify-self: center;

   @media (max-width: 768px) {
      grid-row: 2;
   }

   @media (max-width: 500px) {
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
      gap: 65px;
   }
`;

export const Categories = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;

   @media (max-width: 1024px) {
      justify-content: space-between;
   }

   @media (max-width: 768px) {
      align-items: center;
      justify-content: center;
      gap: 60px;
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

   @media (max-width: 1140px) {
      font-size: 16px;
   }

   @media (max-width: 1024px) {
      font-size: 22px;
   }
`;

export const CategoryContent = styled.p`
   font-weight: 400;
   font-size: 20px;
   font-family: 'Montserrat';

   @media (max-width: 1736px) {
      font-size: 18px;
   }

   @media (max-width: 1300px) {
      font-size: 14px;
   }

   @media (max-width: 1132px) {
      font-size: 17px;
   }

   @media (max-width: 854px) {
      font-size: 14px;
   }

   @media (max-width: 768px) {
      text-align: center;
   }

   @media (max-width: 450px) {
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
      width: 250px;
      height: 250px;
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
      font-size: 16px;
   }
`;

export const DelBtn = styled.button`
   display: flex;
   align-items: center;
   font-size: 20px;
   color: #f24e1e;
   cursor: pointer;

   @media (max-width: 768px) {
      font-size: 25px;
   }

   @media (max-width: 480px) {
      font-size: 16px;
   }
`;

export const CartAddBtn = styled.button`
   padding: 12px 0;
   border-radius: 5px;
   background-color: #53b38d;
   color: #f8f8f8;
   font-size: 20px;
   width: 18vw;
   min-width: 300px;
   max-width: 348px;
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
   margin-top: 20px;

   @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 54px;
   }
`;

export const EditDelImgs = styled.img`
   height: 45px;

   @media (max-width: 1230px) {
      height: 30px;
   }

   @media (max-width: 768px) {
      height: 45px;
   }

   @media (max-width: 480px) {
      height: 20px;
   }
`;

export const RadioInputDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: -2px;
`;

export const RadioInputsDiv = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;

export const RadioInput = styled.input`
   appearance: none;

   width: 35px;
   height: 35px;
   border: solid 2px #275845;
   transition: 0.3s;
   margin-right: -50%;
   background-color: #f8f8f8;
   border-radius: 5px;

   :checked {
      border: solid 2px #53b38d;
   }
`;

export const InputLabel = styled.label`
   width: 25px;
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

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
   width: 65%;
   height: 90%;
   padding: 50px 66px;
   border-radius: 20px;
   background-color: #fafafa;
   @media (max-width: 1360px) {
      width: 70%;
   }
   @media (max-width: 1150px) {
      width: 77.3%;
   }
   @media (max-width: 1024px) {
      width: 95%;
   }
`;

export const TopSideModal = styled.div`
   display: grid;
   grid-template-columns: 30px 1fr 30px;
`;

export const CloseBtn = styled.button`
   cursor: pointer;
   grid-column: 3;
   justify-self: center;
`;

export const Title = styled.h1`
   font-family: 'Montserrat';
   font-size: 36px;
   color: #252822;
   font-weight: 500;
   grid-column: 2;
   justify-self: center;
   margin-bottom: 25px;
`;

export const Content = styled.div`
   display: flex;
   justify-content: space-between;
   gap: 100px;
   height: 100%;
`;

export const Categories = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;

   @media (max-width: 1024px) {
      justify-content: space-between;
   }
`;

export const Category = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
`;

export const CategoryTitle = styled.h2`
   font-weight: 600;
   font-size: 30px;

   @media (max-width: 1024px) {
      font-size: 22px;
   }
`;

export const CategoryContent = styled.p`
   font-weight: 400;
   font-size: 20px;
   font-family: 'Montserrat';

   @media (max-width: 1245px) {
      font-size: 18px;
   }
`;

export const Price = styled.h2`
   font-weight: 600;
   font-size: 40px;
   color: #275845;
`;

export const Img = styled.img`
   width: 18vw;
   min-width: 300px;
   max-width: 348px;
   min-height: 300px;
   max-height: 348px;
   object-fit: cover;
   border-radius: 2px;

   @media (max-width: 828px) {
      min-width: 250px;
      max-width: 300px;
      min-height: 250px;
      max-height: 300px;
   }
`;

export const QuantitiesBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
`;

export const Quantities = styled.p`
   font-size: 30px;
   font-weight: 700;
`;

export const ImgAndQuantities = styled.div`
   display: flex;
   flex-direction: column;
   gap: 15px;
`;

export const EditBtn = styled.button`
   display: flex;
   align-items: center;
   color: #53b38d;
   gap: 12px;
   font-size: 20px;
   cursor: pointer;
`;

export const DelBtn = styled.button`
   display: flex;
   align-items: center;
   font-size: 20px;
   color: #f24e1e;
   cursor: pointer;
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
   @media (max-width: 828px) {
      min-width: 250px;
      max-width: 300px;
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
`;

export const EditDelImgs = styled.img`
   height: 45px;

   @media (max-width: 1230px) {
      height: 30px;
   }
`;

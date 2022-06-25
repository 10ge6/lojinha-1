import styled from 'styled-components';

export const ProductList = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(247px, 1fr));
   gap: 40px;
   width: 100%;
   @media (max-width: 744px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
   }
   @media (max-width: 488px) {
      grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
   }
`;

export const ProductCard = styled.button`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 9px;
   cursor: pointer;
`;

export const ProductImg = styled.img`
   height: 300px;
   width: 100%;
   margin-bottom: -42px;
   object-fit: cover;
   @media (max-width: 744px) {
      height: 50vw;
   }
   @media (max-width: 488px) {
      height: 80vw;
   }
`;

export const ProductPrice = styled.p`
   color: #53b38d;
   font-family: 'Montserrat';
   font-weight: 600;
   font-size: 20px;
`;

export const ProductTitle = styled.p`
   color: #252822;
   font-family: 'Montserrat';
   font-size: 18px;
`;

export const ProductBrand = styled.p`
   color: #a6a39f;
   font-family: 'Montserrat';
   font-size: 18px;
`;

export const Products = styled.h2`
   font-weight: 600;
   font-size: 36px;
   color: #252822;
   @media (max-width: 1024px) {
      font-size: 28px;
   }
   @media (max-width: 744px) {
      font-size: 24px;
   }
`;

export const AllProducts = styled.div`
   display: flex;
   flex-direction: column;
   gap: 46px;
   margin-top: 120px;
   margin-bottom: 60px;
   @media (max-width: 912px) {
      margin-top: 60px;
   }
   @media (max-width: 744px) {
      align-items: center;
      gap: 20px;
   }
`;

export const ProductSizeDiv = styled.div`
   display: flex;
   gap: 2px;
   margin-left: 2px;
`;

export const ProductSize = styled.p`
   padding: 8px;
   font-family: 'Montserrat';
   font-size: 12px;
   color: #252822;
   background-color: #fafafa;
   border-radius: 2px;
`;

export const Error = styled.div`
   width: 100%;
`;

export const PaginationDiv = styled.div`
   display: flex;
   gap: 20px;
   align-items: center;
   align-self: center;
`;

export const PaginationDivNum = styled.div`
   display: flex;
   align-items: flex-end;
   gap: 20px;
`;

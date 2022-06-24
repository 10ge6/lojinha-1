import styled from 'styled-components';

export const Title = styled.h1`
   color: #252822;
   font-weight: 600;
   font-size: 32px;
   margin-top: 80px;
   margin-bottom: 46px;

   @media (max-width: 960px) {
      text-align: center;
      margin-top: 61px;
      font-size: 28px;
   }

   @media (max-width: 488px) {
      font-size: 24px;
      margin-bottom: 20px;
   }
`;

export const Products = styled.div`
   margin-bottom: 40px;
`;

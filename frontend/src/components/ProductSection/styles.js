import styled from "styled-components";

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 247px);
  gap: 40px;
  @media (max-width: 1050px) {
    justify-content: space-between;
  }
  @media (max-width: 912px) {
    grid-template-columns: repeat(auto-fill, 315px);
  }
  @media (max-width: 744px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const ProductImg = styled.img`
  height: 244px;
  width: 247px;
  margin-bottom: -40px;
  @media (max-width: 912px) {
    height: 312px;
    width: 315px;
  }
  @media (max-width: 744px) {
    width: 100%;
    height: 100%;
  }
`;

export const ProductPrice = styled.p`
  color: #53b38d;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 20px;
`;

export const ProductTitle = styled.p`
  color: #252822;
  font-family: "Montserrat";
  font-size: 18px;
`;

export const ProductBrand = styled.p`
  color: #a6a39f;
  font-family: "Montserrat";
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
  font-family: "Montserrat";
  font-size: 12px;
  color: #252822;
  background-color: #fafafa;
  border-radius: 2px;
`;

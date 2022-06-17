import styled from "styled-components";

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImg = styled.img`
  height: 244px;
  width: 247px;
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
`;

export const AllProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

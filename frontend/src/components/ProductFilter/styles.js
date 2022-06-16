import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1680px;
  margin: 0 auto;
  @media (max-width: 730px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div`
  background-color: #2ae89c;
  border-radius: 5px 5px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: linear-gradient(0deg, #2ae89c 50%, #ffffff 50%);
  width: 30%;
  padding: 52px 0;
  @media (max-width: 1024px) {
    gap: 10px;
    background: linear-gradient(0deg, #2ae89c 60%, #ffffff 40%);
  }
  @media (max-width: 730px) {
    width: 100%;
    gap: 16px;
    background: linear-gradient(0deg, #2ae89c 50%, #ffffff 50%);
  }
`;

export const TextBtn = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #424242;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.h2`
  color: #252822;
  font-size: 32px;
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const Img = styled.img`
  @media (max-width: 1024px) {
    width: 50%;
  }
`;

export const VectorImg = styled.img`
  @media (max-width: 1024px) {
    height: 8px;
  }
`;

import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1680px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background-color: #2ae89c;
  border-radius: 5px 5px 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: linear-gradient(0deg, #2ae89c 50%, #ffffff 50%);
  width: 30%;
  padding: 52px 0;
`;

export const TextBtn = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #424242;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  gap: 10px;
`;

export const Text = styled.h2`
  color: #252822;
  font-size: 32px;
  font-weight: 500;
`;

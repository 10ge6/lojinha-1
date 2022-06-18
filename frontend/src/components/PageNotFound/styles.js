import styled from "styled-components";

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 600;
  color: #275845;

  @media (max-width: 1024px) {
    text-align: center;
    font-size: calc(80vw / 14);
  }

  @media (max-width: 675px) {
    font-size: 44px;
  }
  @media (max-width: 413px) {
    font-size: 35px;
    font-weight: 700;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  color: #275845;

  @media (max-width: 1024px) {
    font-size: calc(60vw / 20);
    text-align: center;
  }
  @media (max-width: 675px) {
    font-size: 16px;
  }
`;

export const TitleSub = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  color: #275845;

  .link-home {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  gap: 100px;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

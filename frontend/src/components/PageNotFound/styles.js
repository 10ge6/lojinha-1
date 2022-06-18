import styled from "styled-components";

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 600;
  color: #275845;
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  color: #275845;
`;

export const Description = styled.p`
  font-weight: 500;

  .link-home {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
  gap: 20px;
`;

import styled from "styled-components";

export const Bg = styled.div `
  background-color: #2ae89c;
`;

export const Hero = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 50px 0;
  gap: 50px;

  @media (max-width: 730px) {
    flex-direction: column-reverse;

    gap: 20px;
  }

  @media (max-width: 540px) {
    gap: 0px;
  }
`;

export const Text = styled.div `
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;

  h1 {
    color: #252822;
    font-weight: 700;
    font-size: 4.5rem;
  }

  p {
    color: #252822;
    font-weight: 400;
    font-size: 1.5rem;
  }

  @media (max-width: 1215px){
    h1{font-size: 4rem;}
    p{font-size: 1.3rem}
  }
  
  @media (max-width: 1114px){
    h1{font-size: 3.2rem;}
    p{font-size: 1.3rem}
  }

  @media (max-width: 960px) {
    h1{font-size: 3rem;}
    p{font-size:1.25rem;}
  }

  @media (max-width: 870px) {
    h1{font-size: 2.6rem;}
    p{font-size:1.25rem;}
  }

  @media (max-width:730px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 540px) {
    h1{font-size: 2.5rem;}
  }
  
`;

export const Image = styled.div `
  display: flex;
  justify-content: flex-end;
  flex-basis: 650px;

  img {
    width: 100%;
  }

  @media (max-width: 1270px) {
    flex-basis: 550px;
  }

  @media (max-width:940px) {
    flex-basis: 450px;
  }

  @media (max-width:800px) {
    flex-basis: 390px;
  }

  @media (max-width:480px) {
    flex-basis: 330px;
    
  }
`;

export const Discount = styled.div `
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Button = styled.div `
  display: flex;
  background-color: #275845;
  border-radius: 5px;
  padding: 10px 40px;
  gap: 5px;

  button {
    cursor: pointer;
  }

  p {
    font-weight: 400;
    font-size: 1.125rem;
    color: #fafafa;
  }

  @media (max-width:730px) {
    width: 100%;
    justify-content: center;
  }

`;
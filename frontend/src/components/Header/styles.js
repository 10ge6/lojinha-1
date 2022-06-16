import styled from "styled-components";

export const Wrapper = styled.div `
  position: relative;
`;

export const Header = styled.div `
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 24px 0;
  gap: 20px;
  font-family: "Poppins", sans-serif;

  @media (max-width: 960px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Logo = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    color: #275845;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.25rem;
  }
`;

export const Search = styled.div `
  display: flex;
  width: 40%;

  input {
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    background-color: #fafafa;
    padding: 8px;
    border: 1px solid #a6a39f;
    border-radius: 4px;
  }

  button {
    display: flex;
    align-self: center;
    border: none;
    background-color: transparent;
    margin-left: -25px;
  }

  @media (max-width: 960px) {
    order: 1;
    width: 100%;
  }

  @media (max-width: 680px) {
    &.open {
      display: none;
    }
  }
`;

export const Nav = styled.div `
  display: flex;
    
  ul {
    display: flex;
    align-items: center;
    gap: 40px;
    list-style: none;
  }

  a {
    color: #252822;
    text-decoration: none;
  }
    
  .carrinho {
    background-color: #53B38D;
    border-radius: 5px;
    padding: 5px 15px;
  }

  .carrinho a {
    color: #FAFAFA;
  }

  @media(max-width: 680px) {
    &.closed {
      display: none;
    }
    &.open {
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        background-color: white;
        top: 100%;
        left: 0%;
        width: 100%;
        height: calc(100vh - 100%);
        font-size: 1.5rem;
      }     
    }
  }

`;

export const Menu = styled.div `
  display: none;

  @media(max-width: 680px){
    display: flex;
    
    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
    }
  }
`;
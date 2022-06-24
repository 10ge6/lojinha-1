import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: inherit;
    border: none;
    background: none;
    font-family: 'Poppins';
    box-sizing: border-box;
  }
  .modal{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 90%;
    @media (max-height: 954px) {
      height: 100%;
    }
    @media (max-width: 1040px) {
      width: 95%;
    }
    @media (max-width: 768px){
      width: 100%;
      height: 100%;
    }
  }

  .modal-overlay{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #2AE89CDF;
  }
`;

export const Section = styled.section`
   width: 90%;
   max-width: 1680px;
   margin: 0 auto;
`;

export default GlobalStyle;

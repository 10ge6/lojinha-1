import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle `
    * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: inherit;
    border: none;
    outline: none;
    background: none;
    font-family: 'Poppins';
    box-sizing: border-box;
    }
`;

export const Section = styled.section `
  width: 90%;
  max-width: 1680px;
  margin: 0 auto;
`;

export default GlobalStyle;
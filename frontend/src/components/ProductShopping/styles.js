import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
`;

export const Product = styled.div `
    display: flex;
`;

export const ProductImage = styled.div `
    width: 127px;
    height: 126px;

    img {
        width: 127px;
        height: 126px;
        object-fit: cover;
        border-radius: 2px;
    }
`;

export const Title = styled.div `
    h1 {
        font-weight: 500;
        font-size: 1.125rem;
    }

    p {
       font-size: 0.625;
    }
    span {
        color: #53B38D;
    }

`;

export const Informations = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #252822;
    box-sizing: border-box;
    padding: 5px 0 5px 5px;
   

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 0.75rem;
    }
`;

export const InfContainer = styled.div ``;


export const Options = styled.div `
`;

export const Count = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #53B38D;
    border-radius: 4px;
    width: 48px;
    height: 23px;

    button {
        background: transparent;
        cursor: pointer;
    }
`;
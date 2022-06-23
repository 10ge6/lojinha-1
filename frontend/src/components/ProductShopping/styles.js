import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

export const Product = styled.div `
    display: flex;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ProductImage = styled.div `

    img {
        width: 127px;
        height: 126px;
        object-fit: cover;
        border-radius: 2px;
    }

    @media (max-width: 480px) {
        
        img {
            width: 286px;
            height: 287px;
        }
    }
`;

export const Title = styled.div `
    display: flex;
    flex-direction: column;

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

    @media (max-width: 480px) {
        h1 {
            font-size: 0.875rem;
            text-align: center;
        }
        
        p {
            font-size: 0.469rem;
            text-align: center;
        }

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

    @media (max-width: 480px) {
        gap: 8px;
    }
`;

export const InfContainer = styled.div ``;
export const InfContainer2 = styled.div `
    display: flex;
    flex-direction: column;

    @media (max-width: 480px) {
        display: flex;
        flex-direction: row;
        gap: 10px;
        p {
            font-size: 0.719rem;
        }
    }
`;

export const Options = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
        font-weight: 500;
        font-size: 1.125rem;
        color: #53B38D;
    }

    @media (max-width: 480px) {
        display: flex;
        flex-direction: row;

        h2 {
            font-size: 1rem;
        }
    }

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

export const Button = styled.div `
    background: transparent;
    
    button {
        cursor: pointer;
    }
    
    p{
        text-decoration: underline;
        color: #F24E1E;
        font-weight: 600;
        font-size: 0.875rem;
    }
`;
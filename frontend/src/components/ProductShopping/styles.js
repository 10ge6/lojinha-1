import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    justify-content: space-between;

    @media (max-width: 960px) {
        display: flex;
        flex-direction: column;
    }
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

    @media (max-width: 375px) {
        h1 {
            font-size: 0.875rem;
        }
        
        p {
            font-size: 0.469rem;
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
`;

export const InfContainer = styled.div ``;
export const InfContainer2 = styled.div `
    display: flex;
    flex-direction: column;

    @media (max-width: 375px) {
        display: flex;
        justify-content: space-around;

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

    @media (max-width: 375px) {
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
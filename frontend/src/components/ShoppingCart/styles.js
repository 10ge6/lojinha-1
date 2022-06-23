import styled from 'styled-components'

export const Shopping = styled.div `
    display: flex;
    justify-content: center;
    gap: 120px;

    @media (max-width: 960px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
    }

`;
export const Product = styled.div `
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 30px;

    @media (max-width: 960px) {
        width: 70%;
    }
`;

export const Order = styled.div `
    width: 40%;

    @media (max-width: 960px) {
        width: 70%;
    }
`;


export const Line = styled.div `
    border: 1px solid #9D9A95;
    width: 100%;

    @media (max-width: 960px) {
        width: 70%;
        align-self: center;
    }
`;
import styled from 'styled-components'

export const ContainerAll = styled.div `
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin: 90px 0 90px 0;
`;

export const Shopping = styled.div `
    display: flex;
    gap: 160px;

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

    @media (max-width: 580px) {
        width: 90%;
    }
`;

export const Order = styled.div `
    width: 40%;

    @media (max-width: 960px) {
        width: 70%;
    }
    @media (max-width: 580px) {
        width: 90%;
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

export const Title = styled.div `
    display: flex;
    align-items: center;
    gap: 6px;

    .setinha {
        width: 6px;
        height: 8px;
    }

    h3 {
        color: #275845;
        font-weight: 600;
        font-size: 1.375rem;
    }

    @media (max-width: 960px) {
        justify-content: center;
    }
`;
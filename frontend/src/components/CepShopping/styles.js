import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 50px;
`;

export const Title = styled.div `
    display: flex;
    align-items: center;
    gap: 6px;

    .map {
        width: 27px;
        height: 27px;
    }
    
    h2 {
        color: #275845;
        font-weight: 600;
        font-size: 2rem;
    }

    @media (max-width: 960px) {
        justify-content: center;
    }
`;

export const Cep = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 960px) {
        align-items: center;
    }
    
`;

export const Source = styled.div `
    display: flex;
    position: relative;

    input {
        box-sizing: border-box;
        padding: 11px 20px;
        width: 100%;
        border: 1px solid #9D9A95;
        border-radius: 4px;
    }

    button {
        position: absolute;
        display: flex;
        align-self: center;
        border: none;
        background-color: transparent;
        color: #53B38D;
        padding: 0 20px 0 0;
        right: 0;

    }

    @media (max-width: 960px) {
        display: flex;
        justify-content: center;
        width: 90%
        
    }

    @media (max-width: 560px) {
        width: 100%
    }

`;
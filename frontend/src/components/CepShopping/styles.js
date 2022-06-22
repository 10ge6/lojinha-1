import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const Title = styled.div `
    display: flex;
    gap: 6px;

    h3 {
        color: #275845;
        font-weight: 600;
        font-size: 1.375rem;
    }
    
    h2 {
        color: #275845;
        font-weight: 600;
        font-size: 2rem;
    }
`;

export const Cep = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`;

export const Source = styled.div `
    input {
        box-sizing: border-box;
        padding: 11px 20px;
        width: 100%;
        border: 1px solid #9D9A95;
        border-radius: 4px;
    }

    button {
        background: transparent;
        color: #53B38D;
        margin: -30px;
    }
`;
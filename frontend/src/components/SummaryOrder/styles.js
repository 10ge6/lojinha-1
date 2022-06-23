import styled from "styled-components"

export const Summary = styled.div `
    display: flex;
    flex-direction: column;
    gap: 30px;

    h2 {
        font-weight: 600;
        font-size: 2rem;
        color: #275845;
    }

    @media (max-width: 960px) {
        justify-content: center;
        align-items: center;
    }

    @media (max-width:375px ) {
        h2 {
            font-size: 1.5rem;
        }
    }
`;

export const Line = styled.div `
    width: 100%;
    border: 1px solid #9D9A95; 
    width: 100%;

    @media (max-width: 960px) {
        width: 60%;
    }
`;

export const Informations = styled.div `
    display: flex;
    justify-content: space-between;

    p{
        font-weight: 500;
        font-size: 1.125rem;
        color: #252822;
    }
    @media (max-width:375px ) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;

export const Total = styled.div `
    display: flex;
    justify-content: space-between;

    p{
        font-weight: 700;
        font-size: 1.125rem;
        color: #53B38D;
    }

    @media (max-width:375px ) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Button = styled.div `
    display: flex;
    justify-content: center;

    button {
        background-color: #53B38D;
        color: white;
        font-size: 1.25rem;
        box-sizing: border-box;
        padding: 16px 148px;
    }

    @media (max-width:375px ) {
       width: 100%;
        button {
            font-size: 1rem;
        } 
    }
    
`;
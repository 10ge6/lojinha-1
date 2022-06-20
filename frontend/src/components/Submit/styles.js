import styled from "styled-components"

export const Button = styled.div `
    display: flex;
    justify-content: center;

    button {
        background-color: #53B38D;
        color: #FAFAFA;
        border-radius: 5px;
        padding: 10px 30px;
        font-weight: 500;
        font-size: 1.375rem;
        cursor: pointer;
    }

    @media (max-width: 680px){
        width: 100%;

        button {
            width: 100%;
        }
    }
`;
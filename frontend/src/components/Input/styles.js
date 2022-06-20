import styled from "styled-components"

export const Flex = styled.div `
    display: flex;
    flex-direction: column;

    input {
        border: 1px solid #9D9A95;
        border-radius: 4px;
        height: 42px;
        padding: 13px 11px;
        font-family: 'Montserrat', sans-serif;
    }
    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }
    label {
        color: #275845;
        font-size: 1.125rem;
        font-weight: 500;
    }
`;
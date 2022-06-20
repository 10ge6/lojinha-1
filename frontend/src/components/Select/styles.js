import styled from "styled-components"

export const Flex = styled.div `
    display: flex;
    flex-direction: column;

    label {
        color: #275845;
        font-size: 1.125rem;
        font-weight: 500;
    }

    select {
        border: 1px solid #9D9A95;
        border-radius: 4px;
        height: 42px;
    }
    option {
        color: #275845;
    }
`;
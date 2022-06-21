import styled from "styled-components"

export const Checkbox = styled.div `

    input {
        vertical-align: middle;
    }

    label {
        color: #275845;
        font-size: 1.125rem;
        font-weight: 500;
    }

    label {
        &.on {
            color: #9D9A95;
        }
    }
`;
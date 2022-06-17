import styled from "styled-components";

export const Section = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 100px;

    input {
        border: 1px solid #9D9A95;
        border-radius: 4px;
        height: 42px;
    }
    textarea {
        border: 1px solid #9D9A95;
        border-radius: 4px;
        height: 134px;
        resize: none;
    }
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

export const Flex = styled.div `
    display: flex;
    flex-direction: column;

    .preview {
        font-size: 1.25rem;
    }
`;

export const Title = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #275845;
        font-weight: 700;
        font-size: 4.5rem;
    }

    h2 {
        color: #252822;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 2.5rem;
    }
`;

export const Container = styled.div `
    display: flex;
    gap: 80px;
`;

export const Image = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #9D9A95;
    width: 286px;
    height: 286px;
    
`;

export const Form = styled.div `
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const Text = styled.div `
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

export const Textarea = styled.div `
    display: flex;
    justify-content: space-between;

    .limit {
        color: #53B38D;
        font-weight: 400;
        font-size: 1rem;
    }
`;

export const BrandAndColor = styled.div `
    display: flex;
    gap: 20px;

`;

export const Brand = styled.div `
    
`;

export const InfAndSize = styled.div `
    display: flex;
    gap: 50px;
`;

export const CategoryAndPrice = styled.div `
    display: flex;
    flex-direction: column;
    width: 60%;
`;

export const Category = styled.div `
    display: flex;
    justify-content: space-between;
    
    select {
        width: 144px
    }
`;

export const Size = styled.div `
`;

export const Button = styled.div `
`;
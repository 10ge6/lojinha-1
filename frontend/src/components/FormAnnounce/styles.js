import styled from "styled-components";
import setinha from "../../assets/setinha.svg"

export const Section = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    margin: 100px 0;
    width: 100vw;
    
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

export const Flex = styled.div `
    display: flex;
    flex-direction: column;

    .preview {
        font-size: 1.25rem;
    }
    
   /* select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url({setinha}) no-repeat center right;
    }*/
`;

export const Title = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

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

    
    @media (max-width: 1024px) {
        h1 {
            font-size: 3.5rem;
        }

        h2 {
            font-size: 2rem;
        }
    }

    @media (max-width: 960px) {
        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.375rem;
        }
    }
    
    @media (max-width: 480px) {
        width: 90%;

        h1 {
            text-align: center;
        }
        
        h2 {
            text-align: center;
        }

    }
`;

export const Container = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 80px;

    @media (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 90%;
    }
`;

export const Image = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #9D9A95;
    width: 286px;
    height: 286px;

    .previewImage {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    
`;

export const Preview = styled.div `
    @media (max-width: 960px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Form = styled.div `
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 50px;

    @media (max-width: 960px) {
        width: 100%;
    }
`;

export const Text = styled.div `
    display: flex;
    flex-direction: column;
    gap: 50px;
   
`;

export const BrandAndColor = styled.div `
    display: flex;
    gap: 30px;

    @media (max-width: 680px){
        display: flex;
        flex-direction: column;
    }
`;

export const Brand = styled.div `
    width: 66%;

    @media (max-width: 680px){
        width: 100%;
    }
`;

export const Color = styled.div `
    width: 34%;

    @media (max-width: 680px){
        width: 100%;
    }
`;


export const InfAndSize = styled.div `
    display: flex;
    gap: 30px;

    @media (max-width: 680px){
        display: flex;
        flex-direction: column;
    }

`;

export const CategoryAndPrice = styled.div `
    display: flex;
    flex-direction: column;
    width: 60.5%;
    gap: 50px;

    @media (max-width: 680px){
        width: 100%;
    }
`;

export const Category = styled.div `
    display: flex;
    justify-content: space-between;
    
    select {
        width: 144px;
        color: #275845;
    }
`;

export const Size = styled.div `
    display: flex;
    flex-direction: column;

    input {
        vertical-align: middle;
    }
`;

export const CheckboxCont = styled.div `
    display: flex;
    gap: 20px;

    label {
        &.on {
            color: #9D9A95;
        }
    }

    @media (max-width: 680px){
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

`;

export const Size1 = styled.div `
    display: flex;
    flex-direction: column;

    @media (max-width: 680px){
        display: flex;
        flex-direction: row;
        gap: 50px;
    }
`;

export const Size2 = styled.div `
    display: flex;
    flex-direction: column;

    @media (max-width: 680px){
        display: flex;
        flex-direction: row;
        gap: 50px;
    }
`;
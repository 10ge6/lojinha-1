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
        h2 {
            text-align: center;
        }
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

    @media (max-width: 960px) {
        align-self: center;
        width: 70%;
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
    width: 100%;

    button {
        background-color: #53B38D;
        color: white;
        font-size: 1.25rem;
        box-sizing: border-box;
        padding: 10px 100px;
        border-radius: 5px;
    }

    @media (max-width: 528px ) {
       
        button {
            width: 100%;
            font-size: 1rem;
        } 
    }

    @media (max-width: 479px ) {
       
       button {
           padding: 10px 60px;
           font-size: 1rem;
       } 
   }
   
    
`;
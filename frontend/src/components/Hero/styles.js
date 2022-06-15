import styled from "styled-components";

export const Hero = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 50px 120px;
    height: 10%;
    background-color: #2AE89C;
    font-family: 'Poppins', sans-serif;

    img {
        width: 50%;
    }

    @media (max-width: 960px){
        padding: 50px 100px;

        img {
            width: 50%;
        }
    }
    @media (max-width: 730px) {
        flex-direction: column-reverse;
        padding: 50px 30px;

        img {
            width: 100%;
        }
    }
`;

export const Text = styled.div `
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 24px;

    h1 {
        color: #252822;
        font-weight: 700;
        font-size: 3.9rem;
    }

    p {
        text-align: justify;
        color: #252822;
        font-weight: 400;
        font-size: 1.2rem;
    }

    @media (max-width: 1347px){
        h1 {
            font-size: 3rem;
        }
        
        p {
            font-size: 1rem;
        }
    }

    @media (max-width: 1093px) {
       width: 48%;
    }
    @media (max-width: 960px) {
        width: 50%;
    }
    
    @media (max-width: 923px) {
        width: 60%;

        h1 {
            font-size: 2.5rem;
        }
        p {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 730px) {
        width: 100%;
        text-align: center;

        p {
            text-align: center;
        }
    }

`;

export const Discount = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #275845;
    border-radius: 5px;
    padding: 10px 50px;
    width: 39%;

    p {
        font-weight: 400;
        font-size: 1.1rem;
        color: #FAFAFA;

    }
    button {
        background: transparent;
        cursor: pointer;
    }
    
    button img {
        width: 100%;
    }

    @media (max-width: 1347px) {
        p {
            font-size: 1rem;
        }
    }

    @media (max-width: 1167px) {
        p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 923px) {
        width: 50%;

        p {
            font-size: 0.85rem;
        }

        button img {
            width: 80%;
        }
    }
    
    @media (max-width: 730px) {
        width: 70%; 
    }
`;
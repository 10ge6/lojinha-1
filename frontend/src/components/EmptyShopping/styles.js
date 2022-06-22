import styled from 'styled-components'

export const Shopping = styled.div `
    display: flex;
    justify-content: space-around;  
    padding: 100px 0 100px 0;

    @media (max-width: 960px) {
        display: flex;
        flex-direction: column;

        align-items: center;
        gap: 100px;
    }
`;

export const Section = styled.div `
    display: flex;
    flex-direction: column;
    width: 60%;

    @media (max-width: 960px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 60px
    }

    @media (max-width: 750px) {
        width: 90%;
    }
`;

export const Title = styled.div `
  display: flex;
  align-items: center;
  gap: 5px;

  h3 {
    color: #275845;
    font-weight: 600;
    font-size: 1.375rem;
  }
`;
export const ContainerText = styled.div `
    display: flex;
    justify-content: flex-end;
    height: 100%;
    align-items: center;

`;

export const Text = styled.div `
    display: flex;
    flex-direction: column;

    h1 {
        color: #275845;
        font-weight: 600;
        font-size:  2rem;
    }

    h2 {
        color: #252822;
        font-weight: 500;
        font-size: 1.375rem;
    }

    a {
        text-decoration: underline;
    }

    @media (max-width: 960px) {
        display: flex;
        align-items: center;
        text-align: center;
        gap: 30px;
    }


`;

export const Article = styled.div `
    display: flex;
    flex-direction: column;
    
    gap: 46px;

    h3 {
        color: #275845;
        font-weight: 600;
        font-size: 1.125rem;
    }

    @media (max-width: 960px) {
        display: flex;
        align-items: center;

        h3 {
            font-size: 1.5rem;
        }
    }
`;

export const ContainerProduct = styled.div `
`;

export const image = styled.div `
    width: 247px;
    height: 244px;

    img {
        object-fit: cover;
    }
`;
export const ContainerSize = styled.div `
    display: flex;
    margin: -37px 0 4px 2px;
    gap: 2px;
`;
export const Size = styled.div `
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    background-color: white;
    padding: 8px;
    border-radius: 2px;
`;
export const Price = styled.div `
    color: #53B38D;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.25rem;

`;
export const Product = styled.div `
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #252822;
    font-size: 1.125rem;

`;
export const Brand = styled.div `
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #A6A39F;
    font-size: 1.125rem;

`;
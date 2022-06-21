import styled from 'styled-components'

export const Shopping = styled.div `
    display: flex;
`;

export const Section = styled.div `
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div `
  display: flex;
  align-items: center;
  
  h3 {
    color: #275845;
    font-weight: 600;
    font-size: 1.375rem;
  }
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
`;
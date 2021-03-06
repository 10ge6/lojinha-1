import styled from 'styled-components';

export const Wrapper = styled.div`
   @media (max-width: 680px) {
      &.open {
         position: sticky;
         background: white;
         top: 0;
      }
   }
`;

export const Header = styled.div`
   display: flex;
   justify-content: space-between;
   box-sizing: border-box;
   padding: 24px 0;
   gap: 20px;
   font-family: 'Poppins', sans-serif;

   @media (max-width: 960px) {
      display: flex;
      flex-wrap: wrap;
   }
`;

export const Logo = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;

   h1 {
      color: #275845;
      font-family: 'Josefin Sans', sans-serif;
      font-size: 1.25rem;
   }
`;

export const Search = styled.form`
   display: flex;
   width: 40%;

   input {
      justify-content: center;
      box-sizing: border-box;
      width: 100%;
      background-color: #fafafa;
      padding: 8px;
      border: 1px solid #a6a39f;
      border-radius: 4px;
   }

   button {
      display: flex;
      align-self: center;
      border: none;
      background-color: transparent;
      margin-left: -25px;
   }

   @media (max-width: 960px) {
      order: 1;
      width: 100%;
   }

   @media (max-width: 680px) {
      &.open {
         display: none;
      }
   }
`;

export const Nav = styled.div`
   display: flex;

   ul {
      display: flex;
      align-items: center;
      gap: 40px;
      list-style: none;
   }

   a {
      color: #252822;
      text-decoration: none;
   }

   .carrinho {
      background-color: #53b38d;
      border-radius: 5px;
      padding: 5px 15px;
   }

   .carrinho a {
      color: #fafafa;
   }

   @media (max-width: 680px) {
      &.closed {
         display: none;
      }
      &.open {
         ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            background-color: white;
            top: 100%;
            left: 0;
            width: 100%;
            height: 100vh;
            font-size: 1.5rem;
         }
      }
   }
`;

export const Menu = styled.div`
   display: none;

   @media (max-width: 680px) {
      display: flex;

      button {
         cursor: pointer;
         border: none;
         background-color: transparent;
      }
   }
`;

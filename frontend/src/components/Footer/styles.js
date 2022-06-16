import styled from "styled-components";

export const NavLinks = styled.ul`
  display: flex;
  gap: 40px;
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const Message = styled.p`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const MediaImg = styled.img`
  @media (max-width: 480px) {
    height: 28px;
  }
`;

export const Logo = styled.img`
  margin-right: 25px;

  @media (max-width: 1024px) {
    margin: 0;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

export const NavLink = styled.li`
  font-size: 18px;
  font-weight: 500;
  @media (max-width: 1100px) {
    font-size: 15px;
  }

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 1024px) {
    order: 2;
  }

  @media (max-width: 480px) {
    gap: 35px;
    height: 28px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 45px;
  }

  @media (max-width: 480px) {
    gap: 30px;
  }
`;

export const LogoBtn = styled.button`
  cursor: pointer;
  @media (max-width: 1024px) {
    order: 1;
  }
`;

export const InfoLink = styled.a`
  text-decoration: underline;
`;

export const Bg = styled.div`
  background-color: #f5f5dc;
`;

export const Style = styled.footer`
  padding: 56px 0 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;

  @media (max-width: 1024px) {
    gap: 45px;
    padding: 44px 0;
  }

  @media (max-width: 480px) {
    padding: 30px 0;
    gap: 30px;
  }
`;

import React from "react";
import * as S from "./styles";
import logo from "../../assets/Logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <S.Style>
      <S.FooterTop>
        <S.LogoBtn>
          <S.Logo src={logo} alt="Logo da lojinha" />
        </S.LogoBtn>
        <nav>
          <S.NavLinks>
            <S.NavLink>
              <a href="">Início</a>
            </S.NavLink>
            <S.NavLink>
              <a href="">Produtos</a>
            </S.NavLink>
            <S.NavLink>
              <a href="">Anunciar</a>
            </S.NavLink>
            <S.NavLink>
              <a href="">Carrinho</a>
            </S.NavLink>
          </S.NavLinks>
        </nav>
        <S.Links>
          <a href="">
            <S.MediaImg src={facebook} alt="Logo do facebook" />
          </a>
          <a href="">
            <S.MediaImg src={twitter} alt="Logo do twitter" />
          </a>
          <a href="">
            <S.MediaImg src={instagram} alt="Logo do instagram" />
          </a>
        </S.Links>
      </S.FooterTop>
      <S.Message>
        Feito pela{" "}
        <span>
          <S.InfoLink href="https://infojr.com.br/" target="_blank">
            Infojr UFBA
          </S.InfoLink>
        </span>{" "}
        com Figma, React e muito 💚
      </S.Message>
    </S.Style>
  );
}

export default Footer;

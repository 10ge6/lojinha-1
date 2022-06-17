import React from "react";
import * as S from "./styles";
import logo from "../../assets/Logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import {Section} from "../../styles/Global";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <S.Bg>
      <Section>
        <S.Style>
          <S.FooterTop>
            <S.LogoBtn>
              <S.Logo src={logo} alt="Logo da lojinha" />
            </S.LogoBtn>
            <nav>
              <S.NavLinks>
                <S.NavLink>
                  <Link to="/">Início</Link>
                </S.NavLink>
                <S.NavLink>
                  <Link to="/products">Produtos</Link>
                </S.NavLink>
                <S.NavLink>
                  <Link to="/announce">Anunciar</Link>
                </S.NavLink>
                <S.NavLink>
                  <Link to="/shopping">Carrinho</Link>
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
      </Section>
    </S.Bg>
  );
}

export default Footer;

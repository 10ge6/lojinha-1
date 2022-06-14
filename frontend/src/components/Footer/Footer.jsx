import React from "react";
import Style from "./style";
import logo from "../../assets/Logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <Style>
      <div className="top-level-footer">
        <button className="logo-btn">
          <img className="logo" src={logo} alt="Logo da lojinha" />
        </button>
        <nav className="navigation">
          <ul className="nav-links">
            <li className="nav-link">
              <a href="">Início</a>
            </li>
            <li className="nav-link">
              <a href="">Produtos</a>
            </li>
            <li className="nav-link">
              <a href="">Anunciar</a>
            </li>
            <li className="nav-link">
              <a href="">Carrinho</a>
            </li>
          </ul>
        </nav>
        <nav className="link-buttons">
          <a href="">
            <img className="media-img" src={facebook} alt="Logo do facebook" />
          </a>
          <a href="">
            <img className="media-img" src={twitter} alt="Logo do twitter" />
          </a>
          <a href="">
            <img className="media-img" src={instagram} alt="Logo do instagram" />
          </a>
        </nav>
      </div>
      <p className="footer-message">
        Feito pela{" "}
        <span>
          <a className="infojr-link" href="https://infojr.com.br/" target="_blank">
            Infojr UFBA
          </a>
        </span>{" "}
        com Figma, React e muito 💚
      </p>
    </Style>
  );
}

export default Footer;

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
        <button>
          <img src={logo} alt="Logo da lojinha" />
        </button>
        <nav>
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
          <button>
            <img src={facebook} alt="Logo do facebook" />
          </button>
          <button>
            <img src={twitter} alt="Logo do twitter" />
          </button>
          <button>
            <img src={instagram} alt="Logo do instagram" />
          </button>
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

import React from "react";
import Style from "./style";
import logo from "../../assets/Logo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <Style>
      <img src={logo} alt="Logo da lojinha" />
      <nav>
        <ul>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Produtos</a>
          </li>
          <li>
            <a href="">Anunciar</a>
          </li>
          <li>
            <a href="">Carrinho</a>
          </li>
        </ul>
      </nav>
      <nav>
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
      <p>
        Feito pela{" "}
        <span>
          <a href="">Infojr UFBA</a>
        </span>{" "}
        com Figma, React e muito 💚
      </p>
    </Style>
  );
}

export default Footer;

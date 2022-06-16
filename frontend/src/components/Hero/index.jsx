import compras from "../../assets/compras.svg";
import seta from "../../assets/Seta.svg";
import {Section} from "../../styles/Global";
import * as S from "./styles";

function Hero() {
  return (
    <S.Bg>
      <Section>
        <S.Hero>
          <S.Text>
            <h1>Explore nossa nova coleção</h1>
            <p>Aproveite as ofertas e encontre o look ideal para aproveitar o seu São João na Lojinha.</p>
            <S.Discount>
              <p>Ver descontos</p>
              <button>
                <img src={seta} alt="seta pra baixo para redirecionamento" />
              </button>
            </S.Discount>
          </S.Text>
          <img
            src={compras}
            alt="sacola de compras, presente, caixa para sapato com sapato em cima, etiqueta de preços e algumas folhas para decoração"
          />
        </S.Hero>
      </Section>
    </S.Bg>
  );
}

export default Hero;

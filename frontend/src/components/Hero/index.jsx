import compras from "../../assets/compras.svg";
import seta from "../../assets/Seta.svg";
import {Section} from "../../styles/Global";
import * as S from "./styles";
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()

  return (
    <S.Bg>
      <Section>
        <S.Hero>
          <S.Text>
            <h1>Explore nossa nova coleção</h1>
            <p>Aproveite as ofertas e encontre o look ideal para aproveitar o seu São João na Lojinha.</p>
            <S.Discount>
              <S.Button>
                <p>Ver descontos</p>
                <button onClick={() => navigate('/products')}>
                  <img src={seta} alt="seta pra baixo para redirecionamento" />
                </button>
              </S.Button>
            </S.Discount>
          </S.Text>
          <S.Image>
            <img
              src={compras}
              alt="sacola de compras, presente, caixa para sapato com sapato em cima, etiqueta de preços e algumas folhas para decoração"
            />
          </S.Image>
        </S.Hero>
      </Section>
    </S.Bg>
  );
}

export default Hero;

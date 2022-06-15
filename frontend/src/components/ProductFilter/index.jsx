import React from "react";
import vector from "../../assets/VectorRight.svg";
import camisa from "../../assets/camisa.png";
import tenis from "../../assets/tenis.png";
import bolsa from "../../assets/bolsa.png";
import * as S from "./styles";

function ProductFilter() {
  return (
    <S.Section>
      <div>
        <img src={camisa} alt="Imagem de uma camisa" />
        <h2>Camisas</h2>
        <button>
          <p>Ver mais</p>
          <img src={vector} alt="Botão de Ver mais" />
        </button>
      </div>
      <div>
        <img src={tenis} alt="Imagem de uma camisa" />
        <h2>Tênis</h2>
        <button>
          <p>Ver mais</p>
          <img src={vector} alt="Botão de Ver mais" />
        </button>
      </div>
      <div>
        <img src={bolsa} alt="Imagem de uma camisa" />
        <h2>Bolsas</h2>
        <button>
          <p>Ver mais</p>
          <img src={vector} alt="Botão de Ver mais" />
        </button>
      </div>
    </S.Section>
  );
}

export default ProductFilter;

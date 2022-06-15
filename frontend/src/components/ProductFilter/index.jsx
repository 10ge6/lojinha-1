import React from "react";
import vector from "../../assets/VectorRight.svg";
import camisa from "../../assets/camisa.png";
import tenis from "../../assets/tenis.png";
import bolsa from "../../assets/bolsa.png";
import * as S from "./styles";

function ProductFilter() {
  return (
    <S.Section>
      <S.Card>
        <img src={camisa} alt="Imagem de uma camisa" />
        <S.Text>Camisas</S.Text>
        <S.Button>
          <S.TextBtn>Ver mais</S.TextBtn>
          <img src={vector} alt="Botão de Ver mais" />
        </S.Button>
      </S.Card>
      <S.Card>
        <img src={tenis} alt="Imagem de um tênis" />
        <S.Text>Tênis</S.Text>
        <S.Button>
          <S.TextBtn>Ver mais</S.TextBtn>
          <img src={vector} alt="Botão de Ver mais" />
        </S.Button>
      </S.Card>
      <S.Card>
        <img src={bolsa} alt="Imagem de uma bolsa" />
        <S.Text>Bolsas</S.Text>
        <S.Button>
          <S.TextBtn>Ver mais</S.TextBtn>
          <img src={vector} alt="Botão de Ver mais" />
        </S.Button>
      </S.Card>
    </S.Section>
  );
}

export default ProductFilter;

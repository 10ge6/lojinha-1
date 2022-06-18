import React from "react";
import {Section} from "../../styles/Global";
import {Link} from "react-router-dom";
import * as S from "./styles";

function PageNotFound() {
  return (
    <Section>
      <S.Container>
        <S.TitleSub>
          <S.Title>404: Página Não Encontrada :(</S.Title>
          <S.SubTitle>Infelizmente, sua requisição não encontrou resultado</S.SubTitle>
        </S.TitleSub>
        <S.Description>
          Para retornar à página principal{" "}
          <Link className="link-home" to="/">
            clique aqui
          </Link>{" "}
          ou utilize os links no topo ou fim dessa página
        </S.Description>
      </S.Container>
    </Section>
  );
}

export default PageNotFound;

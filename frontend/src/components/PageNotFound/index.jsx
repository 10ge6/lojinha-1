import React from "react";
import {Section} from "../../styles/Global";
import {Link} from "react-router-dom";

function PageNotFound() {
  return (
    <Section>
      <div>
        <h1>404: Página Não Encontrada :(</h1>
        <h2>Infelizmente, sua requisição não pode ser concluída</h2>
        <p>
          Para retornar à página principal{" "}
          <Link className="link-home" to="/">
            clique aqui
          </Link>{" "}
          ou utilize os links no topo ou fim dessa página
        </p>
      </div>
    </Section>
  );
}

export default PageNotFound;

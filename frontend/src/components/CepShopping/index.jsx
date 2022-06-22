import React from "react"
import setinha from '../../assets/setinha.svg'
import map from '../../assets/map.svg'

function CepShopping(){
    return(
        <S.Container>
            <S.Title>
                <img src={setinha}/>
                <h3>Carrinho</h3>
            </S.Title>
            <S.Cep>
                <S.Title>
                    <img src={map}/>
                    <h2>Buscar CEP</h2>
                </S.Title>
                <S.Source>
                    <input type="text" placeholder="Digite seu CEP"/>
                    <button>Aplicar</button>
                </S.Source>
            </S.Cep>
        </S.Container>
    )
}
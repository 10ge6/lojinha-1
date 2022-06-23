import React from "react"
import map from '../../assets/map.svg'
import * as S from './styles'

function CepShopping(){
    return(
        <S.Container>
            <S.Cep>
                <S.Title>
                    <img className="map" src={map}/>
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

export default CepShopping
import React from "react";
import * as S from './styles'
import * as S from '../ProductSection/styles'
import setinha from '../../assets/setinha.svg'

function EmptyShopping () {
    return (
        <div>
            <S.Section>
                <img src={setinha} alt="seta"/>
                <h3>Carrinho</h3>
                <S.Text>
                <h1>Seu carrinho está vazio :(</h1>
                <h2>Continue navegando pela Lojinha e encontre produtos incríveis!</h2>
                </S.Text>
            </S.Section>
            <S.Article>
                <S.ProductImg></S.ProductImg>
                <S.ProductSize></S.ProductSize>
                <S.ProductTitle></S.ProductTitle>
                <S.ProductBrand></S.ProductBrand>
            </S.Article>
        </div>
    )
}

export default EmptyShopping
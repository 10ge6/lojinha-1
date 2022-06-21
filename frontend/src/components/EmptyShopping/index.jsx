import React from "react";
import * as S from './styles'
import * as S from '../ProductSection/styles'
import setinha from '../../assets/setinha.svg'
import image from '../../assets/image.svg'

function EmptyShopping () {
    return (
        <S.Shopping>
            <S.Section>
                <S.Title>
                    <img src={setinha} alt="seta"/>
                    <h3>Carrinho</h3>
                </S.Title>
                <S.Text>
                    <h1>Seu carrinho está vazio :(</h1>
                    <h2><a>Continue navegando</a> pela Lojinha e encontre produtos incríveis!</h2>
                </S.Text>
            </S.Section>
            <S.Article>
                <h3>Visto recentemente</h3>
                <S.ProductCard>
                    <S.ProductImg><img src={image}/></S.ProductImg>
                    <S.ProductSizeDiv><S.ProductSize><p>M</p></S.ProductSize><S.ProductSize><p>G</p></S.ProductSize></S.ProductSizeDiv>
                    <S.ProductTitle><p>camisa social polo original</p></S.ProductTitle>
                    <S.ProductBrand><p>polo</p></S.ProductBrand>
                </S.ProductCard>  
            </S.Article>
        </S.Shopping>
    )
}

export default EmptyShopping
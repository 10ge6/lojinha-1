import React from "react"
import CepShopping from '../CepShopping'
import  ProductShopping from '../ProductShopping'

function Shopping () {
    return (
        <S.Shopping>
            <S.Product>
                <CepShopping/>
                <S.Line></S.Line>
                <ProductShopping/>
            </S.Product>
            <S.Order>
                <h2>Resumo do pedido</h2>
                <div></div>
            </S.Order>
        </S.Shopping>
    )
}

export default Shopping
import React from 'react'
import * as S from './styles'

function SummaryOrder({datasCart}){

    const totalItem = datasCart.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue.product_qty}, 0);

    const totalValue = datasCart.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue.product_price /100 * currentValue.product_qty  
        }, 0)
    

    return (
        <S.Summary>
                <h2>Resumo do pedido</h2>
                <S.Line></S.Line>
                    <S.Informations2>
                        <p>Subtotal {totalItem} item(s)</p>
                        <p>{(totalValue).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</p>
                    </S.Informations2>
                    <S.Informations2>
                        <p>Entrega</p>
                        <p>R$ 14,90</p>
                    </S.Informations2>
                <S.Line></S.Line>
                <S.Total>
                    <p>Total </p>
                    <p>{(totalValue + 14.9).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</p>
                </S.Total>
                <S.Line></S.Line>
                <S.Button2>
                    <button>Finalizar Compra</button>
                </S.Button2>
        </S.Summary>
    )
}

export default SummaryOrder
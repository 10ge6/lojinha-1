import React from 'react'
import * as S from './styles'

function SummaryOrder(){
    return (
        <S.Summary>
            <h2>Resumo do pedido</h2>
            <S.Line></S.Line>
                <S.Informations>
                    <p>Subtotal (1 item)</p>
                    <p>R$</p>
                </S.Informations>
                <S.Informations>
                    <p>Entrega</p>
                    <p>R$ 14,90</p>
                </S.Informations>
            <S.Line></S.Line>
            <S.Total>
                <p>Total</p>
                <p>R$ </p>
            </S.Total>
            <S.Line></S.Line>
            <S.Button>
                <button>Finalizar Compra</button>
            </S.Button>
            
        </S.Summary>
    )
}

export default SummaryOrder
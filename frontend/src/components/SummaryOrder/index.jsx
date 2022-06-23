import React from 'react'
import * as S from './styles'

function SummaryOrder(){
    return (
        <S.Summary>
                <h2>Resumo do pedido</h2>
                <S.Line></S.Line>
                    <S.Informations2>
                        <p>Subtotal (1 item)</p>
                        <p>R$ </p>
                    </S.Informations2>
                    <S.Informations2>
                        <p>Entrega</p>
                        <p>R$ 14,90</p>
                    </S.Informations2>
                <S.Line></S.Line>
                <S.Total>
                    <p>Total</p>
                    <p>R$ </p>
                </S.Total>
                <S.Line></S.Line>
                <S.Button2>
                    <button>Finalizar Compra</button>
                </S.Button2>
        </S.Summary>
    )
}

export default SummaryOrder
import React from "react"
import { useState, useEffect } from "react"
import CepShopping from '../CepShopping'
import  ProductShopping from '../ProductShopping'
import * as S from './styles'


function ShoppingCart () {
    const [datasCart, setDatasCart] = useState({
        product_id: 0,
        product_size: 0,
        product_qty: 0

    }) 

    useEffect(() => {
        fetch('http://localhost:8000/cart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json)
        .then((data) => {
            console.log(data)
            setDatasCart(data)
        })
        .catch((err) => console.log(err))

    },[])

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

export default ShoppingCart
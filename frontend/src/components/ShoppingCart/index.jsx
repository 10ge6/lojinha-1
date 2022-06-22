import React from "react"
import { useState, useEffect } from "react"
import CepShopping from '../CepShopping'
import  ProductShopping from '../ProductShopping'
import * as S from './styles'

async function getProducts() {
    const response = await fetch("http://localhost:8000/cart");
    const data = await response.json();
    return data.response;
}

function ShoppingCart () {
    const [numberId, setnumberId] = useState() 

    useEffect(() => {
        fetch('http://localhost:8000/cart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json)
        .then((data) => {})
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
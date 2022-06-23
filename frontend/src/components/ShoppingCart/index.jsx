import React from "react"
import { useState, useEffect } from "react"
import CepShopping from '../CepShopping'
import  ProductShopping from '../ProductShopping'
import SummaryOrder from "../SummaryOrder"
import * as S from './styles'


function ShoppingCart () {
    const [datasCart, setDatasCart] = useState([]) 

    useEffect(() => {
        fetch('http://localhost:8000/cart', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setDatasCart(data.response)
        })
        .catch((err) => console.log(err))

    },[])

    return (
        <S.Shopping>
            <S.Product>
                <CepShopping/>
                <S.Line></S.Line>
                {datasCart.map((dataCart) => (
                    <ProductShopping numberId={dataCart.product_id} size={dataCart.product_size} amount={dataCart.product_qty}/>
                ))}
            </S.Product>
            <S.Order>
                <SummaryOrder/> 
            </S.Order>
        </S.Shopping>
    )
}

export default ShoppingCart
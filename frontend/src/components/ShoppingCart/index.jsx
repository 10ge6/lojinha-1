import React from "react"
import {Section} from "../../styles/Global"
import { useState, useEffect } from "react"
import setinha from '../../assets/setinha.svg'
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
        <Section>
            <S.ContainerAll>
                <S.Title>
                    <img className="setinha" src={setinha}/>
                    <h3>Carrinho</h3>
                </S.Title>
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
            </S.ContainerAll>
        </Section>
        
    )
}

export default ShoppingCart
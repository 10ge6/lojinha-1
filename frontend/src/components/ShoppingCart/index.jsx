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
    const [deleteItem, setDeleteItem] = useState(false)

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

    },[deleteItem])

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
                            <ProductShopping 
                            product_id={dataCart.product_id} 
                            product_size={dataCart.product_size} 
                            product_qty={dataCart.product_qty}
                            product_pic={dataCart.product_pic}
                            product_title={dataCart.product_title}
                            product_brand={dataCart.product_brand}
                            product_color={dataCart.product_color}
                            product_price={dataCart.product_price}
                            setDeleteItem={setDeleteItem}
                            setDatasCart={setDatasCart}/>
                        ))}
                    </S.Product>
                    <S.Order>
                        <SummaryOrder dataCart/> 
                    </S.Order>
                </S.Shopping>
            </S.ContainerAll>
        </Section>
        
    )
}

export default ShoppingCart
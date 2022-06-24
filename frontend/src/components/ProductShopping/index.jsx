import React from "react"
import { useState, useEffect } from 'react'
import * as S from './styles'

function ProductShopping({product_id, product_size, product_qty, product_pic, product_title, product_brand, product_color, product_price, setDeleteItem, setDatasCart}) {

    const [itemSize, setItemSize] = useState("")
    
    useEffect(() => {
        const arrExNum = [32, 16, 8, 4, 2, 1];
        const arrExSize = ["XG", "GG", "G", "M", "P", "PP"];
        if(product_size != 0) {
            for (let i=0; i<7; i++) {
                if (product_size == arrExNum[i]) {
                    setItemSize(arrExSize[i])
                   
                } 
            }
        } else {
            setItemSize("Único")
        }   
    })
    

    function removeProduct(id, size) {   
        fetch(`http://localhost:8000/cart/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "product_size": `${size}`
            }),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setDeleteItem({deleteItem: true})
            setDeleteItem({deleteItem: false})
        })
        .catch((err) => console.log(err))
    }

    
    return (
        <div>
            <S.Container>
                <S.Product>
                    <S.ProductImage><img src={product_pic}/></S.ProductImage>
                    <S.Informations>
                        <S.InfContainer>
                            <S.Title>
                                <h1>{product_title}</h1>
                                <p>Vendido por <span>RickRoll</span></p>
                            </S.Title>
                        </S.InfContainer>
                        <S.InfContainer2>
                            <p>Cor: {product_color}</p>
                            <p>Tamanho: {itemSize}</p>
                            <p>Marca: {product_brand}</p>
                        </S.InfContainer2>   
                    </S.Informations>
                </S.Product>
                <S.Options>
                    <S.Count>
                        <button onClick={() => {
                            if (product_qty > 1) {
                                setDatasCart((products) => 
                                    products.map((product) => {
                                        if(products.product_id === product_id && products.product_size === product_size){
                                            return {
                                                ...product, product_qty: product - 1,
                                            }
                                        }
                                        return product
                                    })
                                )
                            }
                        }} >-</button>
                        <p>{product_qty}</p>
                        <button onClick={() => {
                            setDatasCart((products) => 
                                products.map((product) => {
                                    if(products.product_id === product_id && products.product_size === product_size){
                                        return {
                                            ...product, product_qty: product + 1,
                                        }
                                    }
                                    return product
                                })
                            )
                        }}>+</button>
                    </S.Count>
                    <h2>{((product_price/ 100) * product_qty).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</h2>
                    <S.Button><button onClick={() => removeProduct(product_id, product_size)}><p>Deletar</p></button></S.Button>
                </S.Options>
            </S.Container>  
            
        </div>
    )    
}



export default ProductShopping


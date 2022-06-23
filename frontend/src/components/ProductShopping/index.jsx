import React from "react"
import { useState, useEffect } from 'react'
import * as S from './styles'

function ProductShopping({numberId, size, amount}) {

    const [products, setProducts] = useState([])
    const [itemSize, setItemSize] = useState("")

    useEffect(() => {
        fetch(`http://localhost:8000/storefront/${numberId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProducts(data.response)
            getSize()            
        })
        .catch((err) => console.log(err))

    },[])


    function getSize(number={size}) {
        let sSize = ""
        const arrExNum = [32, 16, 8, 4, 2, 1];
        const arrExSize = ["XG", "GG", "G", "M", "P", "PP"];
        for (let i=0; i<7; i++) {
            let numberSize = number
            let aux = numberSize.size
            if (aux == arrExNum[i]) {
                sSize == arrExSize[i]
                setItemSize(sSize)
            } else {
                setItemSize("Único")
            }
        }    
    }


    return (
        <div>
            {products.map((product) => (
                <S.Container>
                    <S.Product>
                        <S.ProductImage><img src={product.product_pic}/></S.ProductImage>
                        <S.Informations>
                            <S.InfContainer>
                                <S.Title>
                                    <h1>{product.product_title}</h1>
                                    <p>Vendido por <span>RickRoll</span></p>
                                </S.Title>
                            </S.InfContainer>
                            <S.InfContainer>
                                <S.Color><p>Cor: {product.product_color}</p></S.Color>
                                <S.Size><p>Tamanho: {itemSize}</p></S.Size>
                                <S.Brand><p>Marca: {product.product_brand}</p></S.Brand>
                            </S.InfContainer>   
                        </S.Informations>
                    </S.Product>
                    <S.Options>
                        <p>deletar</p>
                    </S.Options>

                </S.Container>  
            ))}
        </div>
    )    
}

export default ProductShopping
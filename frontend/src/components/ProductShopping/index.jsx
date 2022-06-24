import React from "react"
import { useState, useEffect } from 'react'
import * as S from './styles'
import SummaryOrder from "../SummaryOrder"

function ProductShopping({numberId, size, amount}) {

    const [products, setProducts] = useState([])
    const [itemSize, setItemSize] = useState("")
    const [count, setCount] = useState(amount)
    const [price, setPrice] = useState()
    const [numberSize, setNumberSize] = useState(0);
    const [totalItem, setTotalItem] = useState();


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
        const arrExNum = [32, 16, 8, 4, 2, 1];
        const arrExSize = ["XG", "GG", "G", "M", "P", "PP"];
        let numberSize = number.size
        if(numberSize != 0) {
            for (let i=0; i<7; i++) {
                if (numberSize == arrExNum[i]) {
                    setItemSize(arrExSize[i])
                } 
            }
        } else {
            setItemSize("Único")
        }   
    }
    
    function getPrice(priceItem, count) {       
        setPrice(priceItem * count)
        console.log(price)          
    }

    function sizeProduct(id, itemSize) {
        const arrExNum = [32, 16, 8, 4, 2, 1];
        const arrExSize = ["XG", "GG", "G", "M", "P", "PP"];
        if(String(itemSize) != "Único") {
            for (let i=0; i<7; i++) {
                if (itemSize == arrExSize[i]) {
                    setNumberSize(arrExNum[i])
                    removeProduct(id, numberSize)
                } 
            }
        } else {
            removeProduct(id, numberSize)
        }         
    }

    function removeProduct(id, numberSize) {
        fetch(`http://localhost:8000/cart/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "product_size": `${numberSize}`
            }),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProducts((products.filter((product) => product.product_id !== id && product.product_size !== numberSize)))
        })
        .catch((err) => console.log(err)) 
    }


    /*tentando passar pra calcular o total */

    

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
                            <S.InfContainer2>
                                <p>Cor: {product.product_color}</p>
                                <p>Tamanho: {itemSize}</p>
                                <p>Marca: {product.product_brand}</p>
                            </S.InfContainer2>   
                        </S.Informations>
                    </S.Product>
                    <S.Options>
                        <S.Count>
                            <button onClick={() =>
                                {if (count > 1) {setCount((count) => count - 1)}}}>-</button>
                            <p>{count}</p>
                            <button onClick={() => setCount((count) => count + 1)}>+</button>
                        </S.Count>
                        <h2>{((product.product_price/ 100) * count).toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</h2>
                        <S.Button><button onClick={() => sizeProduct(product.product_id, itemSize)}><p>Deletar</p></button></S.Button>
                    </S.Options>
                </S.Container>  
            ))}
        </div>
    )    
}



export default ProductShopping


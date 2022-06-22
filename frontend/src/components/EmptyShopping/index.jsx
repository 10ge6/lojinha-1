import React from "react"
import { Link } from 'react-router-dom'
import * as S from './styles' 
import setinha from '../../assets/setinha.svg'
import image from '../../assets/image.svg'

function EmptyShopping () {
    return (
        <S.Shopping>
            <S.Section>
                <S.Title>
                    <img src={setinha} alt="seta"/>
                    <h3>Carrinho</h3>
                </S.Title>
                <S.ContainerText>
                    <S.Text>
                        <h1>Seu carrinho está vazio :(</h1>
                        <h2><Link to='/'>Continue navegando</Link> pela Lojinha e encontre produtos incríveis!</h2>
                    </S.Text>
                </S.ContainerText>
            </S.Section>
            <S.Article>
                <h3>Visto recentemente</h3>
                <S.ContainerProduct>
                    <S.image>
                        <img src={image} alt="homem vestindo uma camisa azul, de manga comprida, da marca polo"/> 
                    </S.image>
                    <S.ContainerSize>
                        <S.Size><p>M</p></S.Size>
                        <S.Size><p>G</p></S.Size>
                    </S.ContainerSize> 
                    <S.Price><p>R$ 54</p></S.Price>
                    <S.Product><p>camisa social polo original</p></S.Product>
                    <S.Brand><p>polo</p></S.Brand>  
                </S.ContainerProduct>   
            </S.Article>
        </S.Shopping>
    )
}

export default EmptyShopping
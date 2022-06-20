import React from "react";
import { useState, useEffect } from "react";
import preview from "../../assets/preview.svg"
import * as S from './styles'
import { useEffect } from "react";


const createProduct = async (informations) => {

    const storyProduct = {
        product_pic: informations.product_pic,
        product_title: informations.product_title,
        product_desc: informations.product_desc,
        product_brand: informations.product_brand, 
        product_color: informations.product_color, 
        product_category: informations.product_category, 
        product_subcategory: informations.product_subcategory, 
        product_price: informations.product_price, 
        product_size: informations.product_size

    }

    const init = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(storyProduct)
    }

    const response = await fetch('http://localhost:300/storefront/insert', init)
    const datas = response.status == 200 ?
        response.json() : [];
}

function FormAnnounce() {

    const [checkboxOn, setCheckboxOn] = useState(false);
    const [urlImage, setUrlImage] = useState(preview);
    const [number, setNumber] = useState();
    const [informations, setInformations] = useState({});
    const subcategories = ["Camisa", "Tênis", "Bolsas"]
    const categories = ["Feminimo", "Infantil", "Masculino", "Unissex"]
    const numberSize = []
    let soma = 0
    let i=0;

    function getUrl(e) {
        setUrlImage(e.target.value)
    }

    function checkNumber(e) {
        setNumber(e.target.value)
        number <= 0 ? alert("Por favor, digite um valor acima de R$ 0,00.") : handleChange
    }

    function handleChange (e) {
        setInformations({...informations, [e.target.name]: e.target.value})
        console.log(informations)
    }

    function counter(){
        let elements = []
        for (i=0; i<7; i++) {
            elements = document.getElementsByName("checkbox")[i];
            elements.checked ? numberSize.push(elements.value) : null;
        }
        const intNumberSize = numberSize.map(Number)
        for(i=0; i<intNumberSize.length;i++) {
            soma += intNumberSize[i];
        }
        attDatas(soma)
    }

    function attDatas (soma) {
        setInformations(informations.product_size = {soma})
        console.log(informations)      
        console.log(informations.product_brand)
        createProduct(informations)
    }

    useEffect((informations) => {
        createProduct(informations)
    }, [])


    return (
        <S.Section>
            <S.Title>
                <h1>Venha vender com a gente!</h1>
                <h2>Cadastre seu produto e venda na lojinha</h2>
            </S.Title>
            <S.Container>
                <S.Flex>
                    <S.Preview>
                        <label className="preview">Preview da imagem</label>
                        <S.Image>
                            <img className={urlImage != preview ? "previewImage" : null } src={urlImage} alt=""/>
                        </S.Image>
                    </S.Preview> 
                </S.Flex>
                <S.Form>
                    <S.Text>
                        <S.Flex><label>Url da imagem</label><input type="url" name="product_pic" placeholder="Digite a url da imagem do seu produto." onChange={(e) => [handleChange(e), getUrl(e)]}/></S.Flex>
                        <S.Flex><label>Título</label><input type="text" name="product_title" placeholder="Digite o título/nome do seu produto." onChange={(e) => handleChange(e)}/></S.Flex>
                        <S.Flex> <label>Descrição do produto</label><textarea name="product_desc" maxLength={300} placeholder="Chegou o momento de descrever o seu produto! Você tem o máximo de 300 caracteres." onChange={(e) => handleChange(e)}></textarea></S.Flex>
                    </S.Text>
                    <S.BrandAndColor>
                        <S.Brand><S.Flex><label>Marca</label><input className="brand" type="text"  name="product_brand" placeholder="Digite a marca do seu produto." onChange={(e) => handleChange(e)}/></S.Flex></S.Brand>
                        <S.Color><S.Flex><label>Cor</label><input className="color" type="text"  name="product_color" placeholder="Digite a cor do seu produto" onChange={(e) => handleChange(e)}/></S.Flex></S.Color>                        
                    </S.BrandAndColor>
                    <S.InfAndSize>
                        <S.CategoryAndPrice>
                            <S.Category>
                                <S.Flex>
                                    <label>Categoria</label>
                                    <select name="product_category" id="product_category" onChange={(e) => handleChange(e)}>
                                        <option>Categoria</option>
                                        {categories.map(category => (
                                            <option value={category}>{category}</option>
                                            ))}
                                    </select>
                                </S.Flex>
                                <S.Flex>
                                    <label>Subcategoria</label>
                                        <select name="product_subcategory" id="product_subcategory" onChange={(e) => handleChange(e)}>
                                            <option>Subcategoria</option>
                                            {subcategories.map(subcategory => (
                                            <option value={subcategory}>{subcategory}</option>
                                            ))}
                                        </select>
                                </S.Flex>
                            </S.Category>
                            <S.Flex><label>Preço</label><input type="number" min="0" name="product_price" step=".01"placeholder="Digite somente o valor do seu produto." onChange={(e) => [checkNumber(e), handleChange(e)]}/></S.Flex>
                        </S.CategoryAndPrice>
                        <S.Size>
                            <label>Tamanho</label>
                            <S.CheckboxCont>
                                <S.Size1>
                                    <label><input type="checkbox" name="checkbox" value="0" onClick={() => setCheckboxOn(state => !state)}/> Único</label>
                                    <label className={checkboxOn ? "on" : null}><input type="checkbox" name="checkbox" value="1" disabled={checkboxOn}/> PP</label>
                                    <label className={checkboxOn ? "on" : null}><input type="checkbox" name="checkbox" value="2" disabled={checkboxOn}/> P</label> 
                                    <label className={checkboxOn ? "on" : null}><input type="checkbox" name="checkbox" value="4" disabled={checkboxOn}/> M</label>
                                </S.Size1>
                                <S.Size2>
                                    <label className={checkboxOn ? "on" : null}><input type="checkbox" name="checkbox" value="8" disabled={checkboxOn}/> G</label>
                                    <label className={checkboxOn ? "on" : null}><input type="checkbox" name="checkbox" value="16" disabled={checkboxOn}/> GG</label>
                                    <label className={checkboxOn ? "on" : null}><input type="checkbox" name="checkbox" value="32" disabled={checkboxOn}/> XG</label>
                                </S.Size2>
                            </S.CheckboxCont> 
                        </S.Size>
                    </S.InfAndSize>
                    <S.Button>
                        <button type="submit" onClick={() => counter()}>Cadastrar produto</button>
                    </S.Button>  
                </S.Form>
            </S.Container>
        </S.Section>
    );
  
}

export default FormAnnounce
import React from "react";
import { useState } from "react";
import preview from "../../assets/preview.svg"
import * as S from './styles'
import { useEffect } from "react";


/*const createProduct = async () => {
    const storyProduct = {
        product_pic: '',
        product_title: '',
        product_desc: '',
        product_brand: '', 
        product_color: '', 
        product_category: '', 
        product_subcategory: '', 
        product_price: '', 
        product_size: ''

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
}*/

function FormAnnounce() {

    const [checkboxOn, setCheckboxOn] = useState(false);
    const [urlImage, setUrlImage] = useState(preview);
    const [number, setNumber] = useState();
    const [informations, setInformations] = useState({});

    function getUrl(e) {
        setUrlImage(e.target.value)
    }

    function checkNumber(e) {
        setNumber(e.target.value)
        number <= 0 ? alert("Por favor, digite um valor acima de R$ 0,00.") : true
    }

    function getDatas () {
    }

    function handleSelect(e) {
        setInformations({...informations, [e.target.name]: e.target.value})
        console.log(informations) 
    }

    function handleChange (e) {
        setInformations({...informations, [e.target.name]: e.target.value})
        console.log(informations)
    }

    /*useEffect(() => {
        createProduct()
    }, [])*/


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
                                    <select name="product_category" id="product_category" onChange={(e) => handleSelect(e)}>
                                        <option disabled selected>Categoria</option>
                                        <option id="product_category" >Feminino</option>
                                        <option id="product_category" >Infantil</option>
                                        <option id="product_category" >Masculino</option>
                                        <option id="product_category" >Unissex</option>
                                    </select>
                                </S.Flex>
                                <S.Flex>
                                    <label>Subcategoria</label>
                                        <select name="product_subcategory" id="product_subcategory" onChange={(e) => handleSelect(e)}>
                                            <option disabled selected>Subcategoria</option>
                                            <option id="product_subcategory">Camisa</option>
                                            <option id="product_subcategory">Tênis</option>
                                            <option id="product_subcategory">Bolsas</option>
                                        </select>
                                </S.Flex>
                            </S.Category>
                            <S.Flex><label>Preço</label><input type="number" min="0" name="product_price" placeholder="Digite somente o valor do seu produto." onChange={(e) => checkNumber(e)}/></S.Flex>
                        </S.CategoryAndPrice>
                        <S.Size>
                            <label>Tamanho</label>
                            <S.CheckboxCont>
                                <S.Size1>
                                    <label><input type="checkbox" onClick={() => setCheckboxOn(state => !state)}/> Único</label>
                                    <label className={checkboxOn ? "on" : null}><input type="checkbox" value="PP" disabled={checkboxOn}/> PP</label>
                                    <label className={checkboxOn ? "on" : null}><input type="checkbox" value="P" disabled={checkboxOn}/> P</label> 
                                    <label className={checkboxOn ? "on" : null}><input type="checkbox" value="M" disabled={checkboxOn}/> M</label>
                                </S.Size1>
                                <S.Size2>
                                    <label className={checkboxOn ? "on" : null}><input type="checkbox" value="G" disabled={checkboxOn}/> G</label>
                                    <label className={checkboxOn ? "on" : null}><input type="checkbox" value="GG" disabled={checkboxOn}/> GG</label>
                                    <label className={checkboxOn ? "on" : null}><input type="checkbox" value="XG" disabled={checkboxOn}/> XG</label>
                                </S.Size2>
                            </S.CheckboxCont> 
                        </S.Size>
                    </S.InfAndSize>
                    <S.Button>
                        <button type="submit" onClick={checkNumber}>Cadastrar produto</button>
                    </S.Button>  
                </S.Form>
            </S.Container>
        </S.Section>
    );
  
}

export default FormAnnounce
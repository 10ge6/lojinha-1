import React from "react";
import { useState, useEffect } from "react";
import preview from "../../assets/preview.svg"
import * as S from './styles'
import Input from  '../Input'
import Submit from "../Submit"
import Textarea from '../Textarea'
import Select from "../Select";

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

    const response = await fetch('http://localhost:300/storefront', init)
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
        setInformations(informations.product_size = soma)
        console.log(informations)
              
    }

    useEffect((informations) => {
        createProduct(informations)
    }, [informations])


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
                        <Input type="url" name="product_pic" text="Url da imagem" placeholder="Digite a url da imagem do seu produto." handleOnChange={handleChange}/>
                        <Input type="text" name="product_title" text="Título" placeholder="Digite o título/nome do seu produto." handleOnChange={handleChange}/>
                        <Textarea name="product_desc" text="Descrição do produto" placeholder="Chegou o momento de descrever o seu produto! Você tem o máximo de 300 caracteres." handleOnChange={handleChange}/>
                    </S.Text>
                    <S.BrandAndColor>
                        <S.Brand><Input className="brand" type="text" text="Marca" name="product_brand" placeholder="Digite a marca do seu produto." handleOnChange={handleChange}/></S.Brand>
                        <S.Color><Input className="color" type="text" text="Cor" name="product_color" placeholder="Digite a cor do seu produto" handleOnChange={handleChange}/></S.Color>                        
                    </S.BrandAndColor>
                    <S.InfAndSize>
                        <S.CategoryAndPrice>
                            <S.Category>
                                <Select text="Categoria" name="product_category" option1={"Categoria"} options={categories} handleOnChange={handleChange}/>
                                <Select text="Subcategoria" name="product_subcategory" option1={"Subcategoria"} options={subcategories} handleOnChange={handleChange}/>
                            </S.Category>
                            <Input type="number" min="0" text="Preço" name="product_price" step=".01" placeholder="Digite somente o valor do seu produto." handleOnChange={handleChange}/>
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
                    <Submit text="Cadastrar produto" handleOnClick={counter}/> 
                </S.Form>
            </S.Container>
        </S.Section>
    );
  
}

export default FormAnnounce
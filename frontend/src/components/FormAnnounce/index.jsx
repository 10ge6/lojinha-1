import React from "react";
import { useState, useEffect } from "react";
import preview from "../../assets/preview.svg"
import * as S from './styles'
import Input from  '../Input'
import Submit from '../Submit'
import Textarea from '../Textarea'
import Select from '../Select'
import Checkbox from '../Checkbox'

function FormAnnounce() {

    const [checkboxOn, setCheckboxOn] = useState(false);
    const subcategories = ["Camisa", "Tênis", "Bolsas"]
    const categories = ["Feminimo", "Infantil", "Masculino", "Unissex"]

    const[informations, setInformations] = useState({
        product_pic: "",
        product_title: "",
        product_desc: "",
        product_brand: "", 
        product_color: "", 
        product_category: "", 
        product_subcategory: "", 
        product_price: "", 
        product_size: 0
    });

    function handleChange (e) {
        setInformations((state) => ({...state, [e.target.name]: e.target.value}))
        console.log(informations)
    }

    function handleCheckbox(e){
        if(e.target.checked){
            setInformations((state) => ({...state, product_size: state.product_size + Number(e.target.value)}))
        }
        else {
            setInformations((state) => ({...state, product_size: state.product_size - Number(e.target.value)}))  
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/storefront', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(informations)
        })

    }

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
                            <img className={informations.product_pic !== "" ? "previewImage" : null } src={informations.product_pic !== "" ? informations.product_pic : preview} alt=""/>
                        </S.Image>
                    </S.Preview> 
                </S.Flex>
                <S.Form onSubmit={handleSubmit}>
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
                            <Input type="number" text="Preço" name="product_price"  placeholder="Digite somente um valor válido do seu produto." handleOnChange={handleChange}/>
                        </S.CategoryAndPrice>
                        <S.Size>
                            <label>Tamanho</label>
                            <S.CheckboxCont>
                                <S.Size1>
                                    <label><input type="checkbox" name="checkbox" value="0" onClick={() => setCheckboxOn(state => !state)}/> Único</label>
                                        <Checkbox value="1" text="PP" stateCheckbox={checkboxOn} handleOnChange={handleCheckbox}/>
                                        <Checkbox value="2" text="P" stateCheckbox={checkboxOn} handleOnChange={handleCheckbox}/>
                                        <Checkbox value="4" text="M" stateCheckbox={checkboxOn} handleOnChange={handleCheckbox}/>
                                </S.Size1>
                                <S.Size2>
                                    <Checkbox value="8" text="G" stateCheckbox={checkboxOn} handleOnChange={handleCheckbox}/>
                                    <Checkbox value="16" text="GG" stateCheckbox={checkboxOn} handleOnChange={handleCheckbox}/>
                                    <Checkbox value="32" text="XG" stateCheckbox={checkboxOn} handleOnChange={handleCheckbox}/>
                                </S.Size2>
                            </S.CheckboxCont> 
                        </S.Size>
                    </S.InfAndSize>
                    <Submit text="Cadastrar produto"/> 
                </S.Form>
            </S.Container>
        </S.Section>
    );
  
}

export default FormAnnounce

/*  
<label className={checkboxOn ? "on" : null}><input type="checkbox" name="checkbox" value="1" onChange={(e) => {handleCheckbox(e)}}  disabled={checkboxOn}/> PP</label>
<label className={checkboxOn ? "on" : null}><input type="checkbox" name="checkbox" value="2" onChange={(e) => {handleCheckbox(e)}}  disabled={checkboxOn}/> P</label>
<label className={checkboxOn ? "on" : null}><input type="checkbox" name="checkbox" value="4" onChange={(e) => {handleCheckbox(e)}}  disabled={checkboxOn}/> M</label>
                                 
<label className={checkboxOn ? "on" : null}><input type="checkbox" name="checkbox" value="8" onChange={(e) => {handleCheckbox(e)}}  disabled={checkboxOn}/> G</label>
<label className={checkboxOn ? "on" : null}><input type="checkbox" name="checkbox" value="16" onChange={(e) => {handleCheckbox(e)}}  disabled={checkboxOn}/> GG</label>
<label className={checkboxOn ? "on" : null}><input type="checkbox" name="checkbox" value="32" onChange={(e) => {handleCheckbox(e)}}  disabled={checkboxOn}/> XG</label>*/
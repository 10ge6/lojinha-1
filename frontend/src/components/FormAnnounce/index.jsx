import React from "react";
import { useState } from "react";
import preview from "../../assets/preview.svg"
import * as S from './styles'

function FormAnnounce() {
    const [checkboxOn, setCheckboxOn] = useState(false);
    const [urlImage, setUrlImage] = useState(preview);

    function getUrl(e) {
        setUrlImage(e.target.value)
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
                            <img className={urlImage != preview ? "previewImage" : null } src={urlImage} alt=""/>
                        </S.Image>
                    </S.Preview> 
                </S.Flex>
                <S.Form>
                    <S.Text>
                        <S.Flex><label>Url da imagem</label><input type="url" onChange={(e) => getUrl(e)}/></S.Flex>
                        <S.Flex><label>Título</label><input type="text"/></S.Flex>
                        <S.Flex> <label>Descrição do produto</label><textarea maxLength={300}></textarea></S.Flex>
                    </S.Text>
                    <S.BrandAndColor>
                        <S.Brand><S.Flex><label>Marca</label><input className="brand" type="text"/></S.Flex></S.Brand>
                        <S.Color><S.Flex><label>Cor</label><input className="color" type="text" /></S.Flex></S.Color>                        
                    </S.BrandAndColor>
                    <S.InfAndSize>
                        <S.CategoryAndPrice>
                            <S.Category>
                                <S.Flex>
                                    <label>Categoria</label>
                                    <select>
                                        <option></option>
                                        <option>Feminino</option>
                                        <option>Infantil</option>
                                        <option>Masculino</option>
                                        <option>Unissex</option>
                                    </select>
                                </S.Flex>
                                <S.Flex>
                                    <label>Subcategoria</label>
                                        <select>
                                            <option></option>
                                            <option>Camisa</option>
                                            <option>Tênis</option>
                                            <option>Bolsas</option>
                                        </select>
                                </S.Flex>
                            </S.Category>
                            <S.Flex><label>Preço</label><input type="number" min="0" /></S.Flex>
                        </S.CategoryAndPrice>
                        <S.Size>
                            <label>Tamanho</label>
                            <S.CheckboxCont>
                                <S.Size1>
                                    <label><input type="checkbox" onClick={() => setCheckboxOn(state => !state)}/> Único</label>
                                    <label><input type="checkbox" disabled={checkboxOn}/> PP</label>
                                    <label><input type="checkbox" disabled={checkboxOn}/> P</label> 
                                    <label><input type="checkbox" disabled={checkboxOn}/> M</label>
                                </S.Size1>
                                <S.Size2>
                                    <label><input type="checkbox" disabled={checkboxOn}/> G</label>
                                    <label><input type="checkbox" disabled={checkboxOn}/> GG</label>
                                    <label><input type="checkbox" disabled={checkboxOn}/> XG</label>
                                </S.Size2>
                            </S.CheckboxCont> 
                        </S.Size>
                    </S.InfAndSize>
                    <S.Button>
                        <button type="submit">Cadastrar produto</button>
                    </S.Button>  
                </S.Form>
            </S.Container>
        </S.Section>
    );
  
}

export default FormAnnounce
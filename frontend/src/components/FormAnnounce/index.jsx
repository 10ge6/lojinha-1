import React from "react";
import preview from "../../assets/preview.svg"
import * as S from './styles'

function FormAnnounce() {
    return (
        <S.Section>
            <S.Title>
                <h1>Venha vender com a gente!</h1>
                <h2>Cadastre seu produto e venda na lojinha</h2>
            </S.Title>
            <S.Container>
                <S.Flex>
                    <label className="preview">Preview da imagem</label>
                    <S.Image>
                        <img src={preview} alt=""/>
                    </S.Image>
                </S.Flex>
                <S.Form>
                    <S.Text>
                        <S.Flex><label>Url da imagem</label><input type="url" /></S.Flex>
                        <S.Flex><label>Título</label><input type="text" /></S.Flex>
                        <S.Flex>
                            <S.Textarea>
                                <label>Descrição do produto</label>
                                <label className="limit">(max. 300 caracteres)</label>
                            </S.Textarea>
                            <textarea></textarea></S.Flex>
                    </S.Text>
                    <S.BrandAndColor>
                        <S.Flex><label>Marca</label><input type="text"/></S.Flex>
                        <S.Flex><label>Cor</label><input type="text" /></S.Flex>                        
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
                            <S.Flex><label>Preço</label><input type="text" /></S.Flex>
                        </S.CategoryAndPrice>
                        <S.Size>
                            <h4>Tamanho</h4>
                            <label><input type="checkbox" />Único</label>
                            <label><input type="checkbox" />PP</label>
                            <label><input type="checkbox" />P</label> 
                            <label><input type="checkbox" />M</label>
                            <label><input type="checkbox" />v</label>
                            <label><input type="checkbox" />GG</label>
                            <label><input type="checkbox" />XG</label>                
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
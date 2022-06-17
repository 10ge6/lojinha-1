import React from "react";
import preview from "../../assets/preview.svg"
import * as S from './styles'

function FormAnnounce() {
    return (
        <S.Section>
            <S.Title>
                <h1>Venha vender com a gente!</h1>
                <h2>Cadastre seu produto e venha vender com a gente</h2>
            </S.Title>
            <S.Image>
                <img src={preview}/>
            </S.Image>
            <S.Form>
                <S.Text>
                    <label>Url da imagem<input type="text" /></label>
                    <label>Título<input type="text" /></label>
                    <label><textarea></textarea></label>
                </S.Text>
                <S.BrandAndColor>
                    <label>Marca<input type="text" /></label>
                    <label>Cor<input type="text" /></label>
                </S.BrandAndColor>
                <S.InfAndSize>
                    <S.CategoryAndPrice>
                        <label>Categoria<input type="text" /></label>
                        <label>Subcategoria<input type="text" /></label>
                        <label>Preço<input type="text" /></label>
                    </S.CategoryAndPrice>
                    <S.Size>
                        <label>Tamanho<input type="text" /></label>
                    </S.Size>
                </S.InfAndSize>
                <S.Button>
                    <button>Cadastrar produto</button>
                </S.Button>  
            </S.Form>
        </S.Section>
    );
    
}

export default FormAnnounce
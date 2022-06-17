import React from "react";
import preview from "../../assets/preview.svg"

function FormAnnounce() {
    return (
        <div>
            <h1>Venha vender com a gente!</h1>
            <h2>Cadastre seu produto e venha vender com a gente</h2>
            <img src={preview}/>
            <label>Url da imagem<input type="text" /></label>
            <label>Título<input type="text" /></label>
            <label><textarea></textarea></label>
            <label>Marca<input type="text" /></label>
            <label>Cor<input type="text" /></label>
            <label>Categoria<input type="text" /></label>
            <label>Subcategoria<input type="text" /></label>
            <label>Preço<input type="text" /></label>
            <label>Tamanho<input type="text" /></label>
            <button>Cadastrar produto</button>
        </div>
    );
    
}

export default FormAnnounce
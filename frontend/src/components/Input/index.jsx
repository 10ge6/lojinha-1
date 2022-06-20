import React from "react"
import * as S from './styles'

function Input({type, text, name, placeholder, handleOnChange}) {
    return(
        <S.Flex>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} placeholder={placeholder} onChange={handleOnChange}></input>
        </S.Flex>  
    )
}

export default Input
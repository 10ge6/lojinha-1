import React from "react"
import * as S from './styles'

function Input({text, name, placeholder, handleOnChange}) {
    return(
        <S.Flex>
            <label htmlFor={name}>{text}</label>
            <textarea name={name} maxLength={300} placeholder={placeholder} onChange={handleOnChange} required></textarea>
        </S.Flex>  
    )
}

export default Input
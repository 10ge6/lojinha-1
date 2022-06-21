import React from "react"
import * as S from './styles'

function Select({text, name, option1, options, handleOnChange}) {
    return(
        <S.Flex>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleOnChange} required>
                <option>{option1}</option>
                {options.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </S.Flex>  
    )
}

export default Select
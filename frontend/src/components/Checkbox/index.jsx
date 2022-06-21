import React from "react"
import * as S from './styles'

function Checkbox(value, text, handleOnChange) {
    return (
        <S.Checkbox>
            <label htmlFor="checkbox"><input type="checkbox" name="checkbox" value={value} onChange={handleOnChange}/>{text}</label>
        </S.Checkbox>
    )
}

export default Checkbox
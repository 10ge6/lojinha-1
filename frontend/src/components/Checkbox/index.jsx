import React from "react"
import * as S from './styles'

function Checkbox({value, text, handleOnChange, stateCheckbox}) {
    return (
        <S.Checkbox>
            <label htmlFor="checkbox" className={stateCheckbox ? "on" : null}><input type="checkbox" name="checkbox" value={value} onChange={handleOnChange} disabled={stateCheckbox}/> {text}</label>
        </S.Checkbox>
    )
}

export default Checkbox
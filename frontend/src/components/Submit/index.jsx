import React from "react"
import * as S from './styles'

function Submit({ text, handleOnClick }) {
    return (
        <S.Button>
            <button type="submit" onClick={handleOnClick}>{text}</button>
        </S.Button>  
    )
}

export default Submit
import React from "react"
import * as S from './styles'

function Submit({ text }) {
    return (
        <S.Button>
            <button>{text}</button>
        </S.Button>  
    )
}

export default Submit
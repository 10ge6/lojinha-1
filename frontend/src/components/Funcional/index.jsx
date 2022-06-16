import * as S from './styles'
import X from '../../assets/X.svg'

function Funcional({MenuOpen, setMenuOpen}) {
    return (
        <S.Nav2>
            <ul>
                <li><a href=''>Início</a></li>
                <li><a href=''>Produtos</a></li>
                <li><a href=''>Anunciar</a></li>
                <li className='carrinho'><a href=''>Carrinho</a></li>
            </ul>
        </S.Nav2>
    ) 
}

export default Funcional
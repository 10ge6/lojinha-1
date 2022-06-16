import * as S from './styles'
import X from '../../assets/X.svg'

function Funcional({MenuOpen, setMenuOpen}) {
    return (
        <S.Section MenuVisible={MenuOpen}>
            <button onClick={() => setMenuOpen(false)}><img src={X} alt="imagem de X para fechar menu"/></button>
            <nav>
                <ul>
                    <li><a href=''>Início</a></li>
                    <li><a href=''>Produtos</a></li>
                    <li><a href=''>Anunciar</a></li>
                    <li className='carrinho'><a href=''>Carrinho</a></li>
                </ul>
            </nav>
        </S.Section>
    ) 
}

export default Funcional
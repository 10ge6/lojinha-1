import logoLojinha from '../../assets/Vector.svg'
import lupaPesquisa from '../../assets/lupa.svg'
import menu from '../../assets/hamburguer.svg'
import X from '../../assets/X.svg'
import * as S from './styles'
import { useState } from 'react'
import Funcional from '../Funcional'

function Header() {

    const [MenuOpen, setMenuOpen] = useState(false);

    return (
        <S.Header>
            <S.Logo>
                <img src={logoLojinha} alt="logo da lojinha"/>
                <h1>Lojinha</h1>
            </S.Logo>
            <S.Search>
                <input type="text" placeholder='Pesquisar por um produto'/>
                <button><img src={lupaPesquisa} alt="lupa para pesquisa"/></button>
            </S.Search> 
            <S.Nav>
                <ul>
                    <li><a href=''>Início</a></li>
                    <li><a href=''>Produtos</a></li>
                    <li><a href=''>Anunciar</a></li>
                    <li className='carrinho'><a href=''>Carrinho</a></li>
                </ul>
            </S.Nav>
            <S.Menu>
                <button onClick={() => setMenuOpen(true)}><img src={menu} alt="menu hamburguer"/></button>
            </S.Menu>
            <Funcional>
                MenuOpen={MenuOpen}
                setMenuOpen={setMenuOpen}
            </Funcional> 
        </S.Header> 
    )

}

export default Header
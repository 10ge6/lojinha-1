import logoLojinha from '../../assets/Vector.svg'
import lupaPesquisa from '../../assets/lupa.svg'
import menu from '../../assets/hamburguer.svg'
import X from '../../assets/X.svg'
import * as S from './styles'
import { useState } from 'react'
import {Section} from "../../styles/Global";
import { Link } from 'react-router-dom'

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <S.Wrapper className={menuOpen ? 'open' : 'closed'}>
            <Section>
                <S.Header>
                    <S.Logo>
                        <img src={logoLojinha} alt="logo da lojinha"/>
                        <h1>Lojinha</h1>
                    </S.Logo>
                    <S.Search className={menuOpen ? 'open' : 'closed'}>
                        <input type="text" placeholder='Pesquisar por um produto'/>
                        <button><img src={lupaPesquisa} alt="lupa para pesquisa"/></button>
                    </S.Search> 
                    <S.Nav className={menuOpen ? 'open' : 'closed'}>
                        <ul>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/Produtos">Produtos</Link></li>
                            <li><Link to="/Anunciar">Anunciar</Link></li>
                            <li className='carrinho'><Link Carrinho>Carrinho</Link></li>
                        </ul>   
                        <Outlet/>
                    </S.Nav>
                    <S.Menu>
                        <button onClick={() => setMenuOpen(state => !state)}>{menuOpen ? <img src={X}/> : <img src={menu}/>}</button>
                    </S.Menu> 
                </S.Header> 
            </Section>   
        </S.Wrapper>
    )

}

export default Header

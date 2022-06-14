import logoLojinha from '../../assets/Vector.svg'
import lupaPesquisa from '../../assets/lupa.svg'
import menu from '../../assets/hamburguer.svg'
import { Principal } from './styles'

function Header() {
    return (
        <Principal>
            <header> 
                <div className='logo flex'>
                    <img src={logoLojinha} alt="logo da lojinha"/>
                     <h1>Lojinha</h1>
                </div>
                <div className='search'>
                    <input type="text" placeholder='Pesquisar por um produto'/>
                    <button><img src={lupaPesquisa} alt="lupa para pesquisa"/></button>
                </div>
                <nav>
                    <ul className='nav flex'>
                        <li><a href=''>Início</a></li>
                        <li><a href=''>Produtos</a></li>
                        <li><a href=''>Anunciar</a></li>
                        <li className='carrinho'><a href=''>Carrinho</a></li>
                    </ul>
                </nav>
                <div className='menu'>
                    <button><img src={menu} alt="menu hamburguer"/></button>
                </div>
            </header>
        </Principal>  
    )

}

export default Header
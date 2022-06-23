import logoLojinha from '../../assets/Vector.svg';
import lupaPesquisa from '../../assets/lupa.svg';
import menu from '../../assets/hamburguer.svg';
import X from '../../assets/X.svg';
import * as S from './styles';
import { useState, useEffect } from 'react';
import { Section } from '../../styles/Global';
import { Link, Navigate } from 'react-router-dom';
import { scrollLock } from '../Modal';

function Header() {
   const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
      scrollLock(menuOpen);
   }, [menuOpen]);

   return (
      <S.Wrapper className={menuOpen ? 'open' : 'closed'}>
         <Section>
            <S.Header>
               <S.Logo>
                  <img src={logoLojinha} alt='logo da lojinha' />
                  <h1>Lojinha</h1>
               </S.Logo>
               <S.Search className={menuOpen ? 'open' : 'closed'}>
                  <input
                     id='search-bar'
                     onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                           location.href = `/search?query=${document.getElementById('search-bar').value}`;
                        }
                     }}
                     type='text'
                     placeholder='Pesquisar por um produto'
                  />
                  <button
                     onClick={() => (location.href = `/search?query=${document.getElementById('search-bar').value}`)}
                  >
                     <img src={lupaPesquisa} alt='lupa para pesquisa' />
                  </button>
               </S.Search>
               <S.Nav className={menuOpen ? 'open' : 'closed'}>
                  <ul>
                     <li>
                        <Link onClick={() => setMenuOpen(false)} to='/'>
                           Início
                        </Link>
                     </li>
                     <li>
                        <Link onClick={() => setMenuOpen(false)} to='/products'>
                           Produtos
                        </Link>
                     </li>
                     <li>
                        <Link onClick={() => setMenuOpen(false)} to='/announce'>
                           Anunciar
                        </Link>
                     </li>
                     <li className='carrinho'>
                        <Link onClick={() => setMenuOpen(false)} to='/shopping'>
                           Carrinho
                        </Link>
                     </li>
                  </ul>
               </S.Nav>
               <S.Menu>
                  <button onClick={() => setMenuOpen((state) => !state)}>
                     {menuOpen ? <img src={X} /> : <img src={menu} />}
                  </button>
               </S.Menu>
            </S.Header>
         </Section>
      </S.Wrapper>
   );
}

export default Header;

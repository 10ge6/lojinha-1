import React from 'react';
import vector from '../../assets/VectorRight.svg';
import camisa from '../../assets/camisa.png';
import tenis from '../../assets/tenis.png';
import bolsa from '../../assets/bolsa.png';
import { Section } from '../../styles/Global';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

function ProductFilter() {
   const navigate = useNavigate();

   return (
      <Section>
         <S.Section>
            <S.Card>
               <S.Img src={camisa} alt='Imagem de uma camisa' />
               <S.Text>Camisas</S.Text>
               <S.Button onClick={() => navigate('/search?query=Camisa')}>
                  <S.TextBtn>Ver mais</S.TextBtn>
                  <S.VectorImg src={vector} alt='Botão de Ver mais' />
               </S.Button>
            </S.Card>
            <S.Card>
               <S.Img src={tenis} alt='Imagem de um tênis' />
               <S.Text>Tênis</S.Text>
               <S.Button onClick={() => navigate('/search?query=Tenis')}>
                  <S.TextBtn>Ver mais</S.TextBtn>
                  <S.VectorImg src={vector} alt='Botão de Ver mais' />
               </S.Button>
            </S.Card>
            <S.Card>
               <S.Img src={bolsa} alt='Imagem de uma bolsa' />
               <S.Text>Bolsas</S.Text>
               <S.Button onClick={() => navigate('/search?query=Bolsa')}>
                  <S.TextBtn>Ver mais</S.TextBtn>
                  <S.VectorImg src={vector} alt='Botão de Ver mais' />
               </S.Button>
            </S.Card>
         </S.Section>
      </Section>
   );
}

export default ProductFilter;

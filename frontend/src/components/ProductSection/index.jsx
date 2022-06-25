import React from 'react';
import { Section } from '../../styles/Global';
import { useState, useEffect } from 'react';
import * as S from './styles';
import Modal from '../Modal';
import NotFound from '../PageNotFound';
import previousPgBtn from '../../assets/previousPageBtn.svg';
import nextPgBtn from '../../assets/nextPageBtn.svg';

export function getSize(num) {
   let actualNum = num;
   const arrExNum = [32, 16, 8, 4, 2, 1];
   const arrExSize = ['XG', 'GG', 'G', 'M', 'P', 'PP'];
   let arrSizes = [];
   for (let i = 0; i < 6; i++) {
      if (num == 0) {
         return ['ÚNICO'];
      } else if (arrExNum[i] <= actualNum) {
         arrSizes.push(arrExSize[i]);
         actualNum -= arrExNum[i];
      }
   }
   return arrSizes;
}

export function ProductList({ urlFetch, setUrl, openModal }) {
   const [users, setUsers] = useState([]);

   async function getUsers() {
      const response = await fetch(`http://localhost:8000/storefront${urlFetch}`);
      const data = await response.json();
      return data.response;
   }

   function textPrice(price) {
      let text = (price / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
      if (Number.isInteger(price / 100)) {
         return <S.ProductPrice>{text.slice(0, text.length - 3)}</S.ProductPrice>;
      }
      return <S.ProductPrice>{text}</S.ProductPrice>;
   }

   useEffect(() => {
      getUsers().then((users) => {
         setUsers(users);
      });
   }, [urlFetch]);

   if (users != undefined) {
      return (
         <S.ProductList>
            {users.map((user) => (
               <S.ProductCard
                  onClick={() => {
                     openModal();
                     setUrl(user.product_id);
                  }}
                  key={user.product_id}
               >
                  <S.ProductImg
                     src={user.product_pic}
                     onError={({ currentTarget }) => {
                        currentTarget.src =
                           'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
                     }}
                     alt='Imagem do produto'
                  />
                  <S.ProductSizeDiv>
                     {getSize(user.product_size).map((size, index) => {
                        return <S.ProductSize key={index}>{size}</S.ProductSize>;
                     })}
                  </S.ProductSizeDiv>

                  {textPrice(user.product_price)}
                  <S.ProductTitle>{user.product_title}</S.ProductTitle>
                  <S.ProductBrand>{user.product_brand}</S.ProductBrand>
               </S.ProductCard>
            ))}
         </S.ProductList>
      );
   } else {
      return (
         <div>
            <NotFound />
         </div>
      );
   }
}

function ProductSection() {
   const [url, setUrl] = useState('');
   const [modalVisible, setModalVisible] = useState(false);
   const [page, setPage] = useState(1);
   const [maxPage, setMaxPage] = useState(0);

   function decreasePage() {
      if (page > 1) {
         setPage((page) => page - 1);
      }
   }

   async function getNumAllProducts() {
      const response = await fetch('http://localhost:8000/storefront?count');
      const data = await response.json();
      return data.response[0].item_count;
   }

   function getPageBtns(actualPage, max) {
      let arr = [];
      for (let i = 1; i <= max; i++) {
         if (arr.length > actualPage + 1 && arr.length < max - 1) {
            arr.push('...');
            arr.push(max);
            break;
         }
         arr.push(i);
      }
      return arr;
   }

   getNumAllProducts().then((items) => setMaxPage(Math.ceil(items / 10)));

   function increasePage() {
      if (page < maxPage) {
         setPage((page) => page + 1);
      }
   }

   function actualPage(num) {
      if (page == num) {
         return 'actual-page';
      } else {
         return '';
      }
   }

   const openModal = () => {
      setModalVisible(true);
   };

   const closeModal = () => {
      setModalVisible(false);
   };
   return (
      <Section>
         <S.AllProducts>
            <S.Products>Produtos</S.Products>
            <Modal visible={modalVisible} url={url} closeModal={closeModal} />
            <ProductList urlFetch={`?page=${page}`} setUrl={setUrl} openModal={openModal} />
            <S.PaginationDiv>
               <button onClick={() => decreasePage()}>
                  <img src={previousPgBtn} alt='Botão de ir pra página anterior' />
               </button>
               <S.PaginationDivNum>
                  {getPageBtns(page, maxPage).map((item) => {
                     if (item == '...') {
                        return <S.TripleDot>{item}</S.TripleDot>;
                     }
                     return (
                        <S.PageBtn className={actualPage(item)} onClick={() => setPage(item)}>
                           {item}
                        </S.PageBtn>
                     );
                  })}
               </S.PaginationDivNum>
               <button onClick={() => increasePage()}>
                  <img src={nextPgBtn} alt='Botão de ir pra próxima página' />
               </button>
            </S.PaginationDiv>
         </S.AllProducts>
      </Section>
   );
}

export default ProductSection;

import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import preview from '../../assets/preview.svg';
import * as S from './styles';
import Input from '../Input';
import Submit from '../Submit';
import Textarea from '../Textarea';
import Select from '../Select';
import Checkbox from '../Checkbox';

function FormAnnounce({ id, text, method }) {
   const [checkboxOn, setCheckboxOn] = useState(false);
   const subcategories = ['Camisa', 'Tênis', 'Bolsa'];
   const categories = ['Feminimo', 'Infantil', 'Masculino', 'Unissex'];
   const navigate = useNavigate();

   const [informations, setInformations] = useState({
      product_pic: '',
      product_title: '',
      product_desc: '',
      product_brand: '',
      product_color: '',
      product_category: '',
      product_subcategory: '',
      product_price: '',
      product_size: 0,
   });

   async function getProduct() {
      const response = await fetch(`http://localhost:8000/storefront/${id}`);
      const data = await response.json();
      if (data.response.length == 1) {
         return data.response[0];
      }
   }

   function setCheckboxes(num) {
      const boolArr = getSizes(num);
      for (let i = 0; i < 7; i++) {
         if (document.getElementsByTagName('input')[6].checked == true) {
            setCheckboxOn(true);
         }
         document.getElementsByTagName('input')[i + 6].checked = boolArr[i];
      }
   }

   function getSizes(num) {
      let actualNum = num;
      const arrExNum = [32, 16, 8, 4, 2, 1];
      let arr = [];
      for (let i = 0; i <= 6; i++) {
         if (num == 0) {
            arr.push(true, false, false, false, false, false, false);
            break;
         } else if (arrExNum[i] <= actualNum) {
            arr.splice(0, 0, true);
            actualNum -= arrExNum[i];
         } else {
            arr.splice(0, 0, false);
         }
      }
      return arr;
   }

   function setProductsValue(value) {
      if (value != undefined) {
         document.getElementsByTagName('input')[1].value = value.product_pic;
         document.getElementsByTagName('input')[2].value = value.product_title;
         document.getElementsByTagName('textarea')[0].value = value.product_desc;
         document.getElementsByTagName('input')[3].value = value.product_brand;
         document.getElementsByTagName('input')[4].value = value.product_color;
         document.getElementsByTagName('select')[0].value = value.product_category;
         document.getElementsByTagName('select')[1].value = value.product_subcategory;
         document.getElementsByTagName('input')[5].value = value.product_price / 100;
         setCheckboxes(value.product_size);
         updateInformations(value.product_size);
      }
   }

   useEffect(() => {
      getProduct().then((product) => setProductsValue(product));
      window.scrollTo(0, 0);
   }, []);

   function handleChange(e) {
      setInformations((state) => ({ ...state, [e.target.name]: e.target.value }));
   }

   function handlePrice(e) {
      setInformations((state) => ({ ...state, [e.target.name]: Number(e.target.value) * 100 }));
   }

   function setCheckboxFalse() {
      setInformations({ ...informations, product_size: 0 });
      if (document.getElementsByTagName('input')[6].checked) {
         for (let i = 0; i < 6; i++) {
            document.getElementsByTagName('input')[i + 7].checked = false;
         }
      }
   }

   function handleCheckbox(e) {
      if (e.target.checked) {
         setInformations((state) => ({ ...state, product_size: state.product_size + Number(e.target.value) }));
      } else {
         setInformations((state) => ({ ...state, product_size: state.product_size - Number(e.target.value) }));
      }
   }

   function updateInformations(price) {
      setInformations({
         product_pic: document.getElementsByTagName('input')[1].value,
         product_title: document.getElementsByTagName('input')[2].value,
         product_desc: document.getElementsByTagName('textarea')[0].value,
         product_brand: document.getElementsByTagName('input')[3].value,
         product_color: document.getElementsByTagName('input')[4].value,
         product_category: document.getElementsByTagName('select')[0].value,
         product_subcategory: document.getElementsByTagName('select')[1].value,
         product_price: document.getElementsByTagName('input')[5].value * 100,
         product_size: price,
      });
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      fetch(`http://localhost:8000/storefront/${id}`, {
         method: method,
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(informations),
      })
         .then((resp) => resp.json())
         .then((data) => {
            navigate('/');
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <S.Section>
         <S.Title>
            <h1>Venha vender com a gente!</h1>
            <h2>Cadastre seu produto e venda na lojinha</h2>
         </S.Title>
         <S.Container>
            <S.Flex>
               <S.Preview>
                  <label className='preview'>Preview da imagem</label>
                  <S.Image>
                     <img
                        className={informations.product_pic !== '' ? 'previewImage' : null}
                        src={informations.product_pic !== '' ? informations.product_pic : preview}
                        alt=''
                     />
                  </S.Image>
               </S.Preview>
            </S.Flex>
            <S.Form onSubmit={handleSubmit}>
               <S.Text>
                  <Input
                     type='url'
                     name='product_pic'
                     text='Url da imagem'
                     placeholder='Digite a url da imagem do seu produto.'
                     handleOnChange={handleChange}
                  />
                  <Input
                     type='text'
                     name='product_title'
                     text='Título'
                     placeholder='Digite o título/nome do seu produto.'
                     handleOnChange={handleChange}
                  />
                  <Textarea
                     name='product_desc'
                     text='Descrição do produto'
                     placeholder='Chegou o momento de descrever o seu produto! Você tem o máximo de 300 caracteres.'
                     handleOnChange={handleChange}
                  />
               </S.Text>
               <S.BrandAndColor>
                  <S.Brand>
                     <Input
                        className='brand'
                        type='text'
                        text='Marca'
                        name='product_brand'
                        placeholder='Digite a marca do seu produto.'
                        handleOnChange={handleChange}
                     />
                  </S.Brand>
                  <S.Color>
                     <Input
                        className='color'
                        type='text'
                        text='Cor'
                        name='product_color'
                        placeholder='Digite a cor do seu produto'
                        handleOnChange={handleChange}
                     />
                  </S.Color>
               </S.BrandAndColor>
               <S.InfAndSize>
                  <S.CategoryAndPrice>
                     <S.Category>
                        <Select
                           text='Categoria'
                           name='product_category'
                           option1={'Categoria'}
                           options={categories}
                           handleOnChange={handleChange}
                        />
                        <Select
                           text='Subcategoria'
                           name='product_subcategory'
                           option1={'Subcategoria'}
                           options={subcategories}
                           handleOnChange={handleChange}
                        />
                     </S.Category>
                     <Input
                        type='number'
                        text='Preço'
                        name='product_price'
                        step='.01'
                        placeholder='Digite somente um valor válido do seu produto.'
                        handleOnChange={handlePrice}
                     />
                  </S.CategoryAndPrice>
                  <S.Size>
                     <label>Tamanho</label>
                     <S.CheckboxCont>
                        <S.Size1>
                           <label>
                              <input
                                 type='checkbox'
                                 name='checkbox'
                                 value='0'
                                 onClick={() => {
                                    setCheckboxFalse();
                                    setCheckboxOn((state) => !state);
                                 }}
                              />{' '}
                              Único
                           </label>
                           <Checkbox value='1' text='PP' stateCheckbox={checkboxOn} handleOnChange={handleCheckbox} />
                           <Checkbox value='2' text='P' stateCheckbox={checkboxOn} handleOnChange={handleCheckbox} />
                           <Checkbox value='4' text='M' stateCheckbox={checkboxOn} handleOnChange={handleCheckbox} />
                        </S.Size1>
                        <S.Size2>
                           <Checkbox value='8' text='G' stateCheckbox={checkboxOn} handleOnChange={handleCheckbox} />
                           <Checkbox value='16' text='GG' stateCheckbox={checkboxOn} handleOnChange={handleCheckbox} />
                           <Checkbox value='32' text='XG' stateCheckbox={checkboxOn} handleOnChange={handleCheckbox} />
                        </S.Size2>
                     </S.CheckboxCont>
                  </S.Size>
               </S.InfAndSize>
               <Submit text={text} />
            </S.Form>
         </S.Container>
      </S.Section>
   );
}

export default FormAnnounce;

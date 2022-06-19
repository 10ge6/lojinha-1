import React from "react";
import {Section} from "../../styles/Global";
import {useState, useEffect} from "react";
import * as S from "./styles";

function ProductSection() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const response = await fetch("http://localhost:8000/storefront");
    const data = await response.json();
    return data.response;
  }

  function textPrice(price) {
    let text = (price / 100).toLocaleString("pt-br", {style: "currency", currency: "BRL"});
    if (Number.isInteger(price / 100)) {
      return <S.ProductPrice>{text.slice(0, text.length - 3)}</S.ProductPrice>;
    }
    return <S.ProductPrice>{text}</S.ProductPrice>;
  }

  function getSize(num) {
    let actualNum = num;
    const arrExNum = [32, 16, 8, 4, 2, 1];
    const arrExSize = ["XG", "GG", "G", "M", "P", "PP"];
    let arrSizes = [];
    for (let i = 0; i < 6; i++) {
      if (num == 0) {
        return ["ÚNICO"];
      } else if (arrExNum[i] <= actualNum) {
        arrSizes.push(arrExSize[i]);
        actualNum -= arrExNum[i];
      }
    }
    return arrSizes;
  }

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <Section>
      <S.AllProducts>
        <S.Products>Produtos</S.Products>
        <S.ProductList>
          {users.map((user) => (
            <S.ProductCard key={user.product_id}>
              <div>
                <S.ProductImg
                  src={user.product_pic}
                  onError={({currentTarget}) => {
                    currentTarget.src = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
                  }}
                  alt="Imagem do produto"
                />
                <S.ProductSizeDiv>
                  {getSize(user.product_size).map((size, index) => {
                    return <S.ProductSize key={index}>{size}</S.ProductSize>;
                  })}
                </S.ProductSizeDiv>
              </div>

              {textPrice(user.product_price)}
              <S.ProductTitle>{user.product_title}</S.ProductTitle>
              <S.ProductBrand>{user.product_brand}</S.ProductBrand>
            </S.ProductCard>
          ))}
        </S.ProductList>
      </S.AllProducts>
    </Section>
  );
}

export default ProductSection;
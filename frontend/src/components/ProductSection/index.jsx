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
    let text = price.toString();
    if (Number.isInteger(price / 100)) {
      return <S.ProductPrice>{"R$ " + text.slice(0, text.length - 2)}</S.ProductPrice>;
    }
    return <S.ProductPrice>{"R$ " + text.slice(0, text.length - 2) + "," + text.slice(text.length - 2, text.length)}</S.ProductPrice>;
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
              <S.ProductImg
                src={user.product_pic}
                onError={({currentTarget}) => {
                  currentTarget.src = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
                }}
                alt="Imagem do produto"
              />
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

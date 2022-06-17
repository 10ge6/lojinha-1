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
      return <p>{"R$ " + text.slice(0, text.length - 2)}</p>;
    }
    return <p>{"R$ " + text.slice(0, text.length - 2) + "," + text.slice(text.length - 2, text.length)}</p>;
  }

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <Section>
      <div>
        {users.map((user) => (
          <div key={user.product_id}>
            <img
              src={user.product_pic}
              onError={({currentTarget}) => {
                currentTarget.src = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
              }}
              alt="Imagem do produto"
            />
            {textPrice(user.product_price)}
            <p>{user.product_title}</p>
            <p>{user.product_brand}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default ProductSection;

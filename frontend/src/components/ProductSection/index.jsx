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

  useEffect(() => {
    getUsers().then((users) => {
      console.log(users);
      setUsers(users);
    });
  }, []);

  return (
    <Section>
      <div>
        {users.map((user) => (
          <div>{console.log(user)}</div>
        ))}
      </div>
    </Section>
  );
}

export default ProductSection;

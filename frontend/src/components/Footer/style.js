import styled from "styled-components";

const Style = styled.footer`
  background-color: #f5f5dc;
  padding: 56px 120px 24px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;

  button {
    cursor: pointer;
  }

  .top-level-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .infojr-link {
    text-decoration: underline;
  }

  .nav-links {
    display: flex;
    gap: 40px;
  }

  .nav-link {
    font-size: 18px;
    font-weight: 500;
  }

  .link-buttons {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .footer-message {
    font-size: 16px;
    font-weight: 400;
  }
`;

export default Style;

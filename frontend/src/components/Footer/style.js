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

  .logo {
    margin-right: 25px;
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

  @media (max-width: 1100px) {
    .nav-link {
      font-size: 15px;
    }
  }

  @media (max-width: 1024px) {
    gap: 45px;
    padding: 44px 0;
    .top-level-footer {
      flex-direction: column;
      gap: 45px;
    }

    .nav-link {
      font-size: 18px;
    }

    .logo-btn {
      order: 1;
    }

    .logo {
      margin: 0;
    }

    .link-buttons {
      order: 2;
    }
  }
`;

export default Style;

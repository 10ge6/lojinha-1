import styled from 'styled-components'

export const Principal = styled.header `

    header {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 24px 30px;
        gap: 20px;
        font-family: 'Poppins', sans-serif;
    }

   /*FLEX */
    .flex {
        display: flex;
    }

    /*LOGO */
    .logo h1 {
        color: #275845;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.25rem;
    }

    .logo {
        align-items: center;
        gap: 10px;
    }

    /*NAV */
    .nav {
        align-items: center;
        gap: 40px;
        list-style: none;
    }

    a {
        color: #252822;
        text-decoration: none;
    }

    .carrinho {
        background-color: #53B38D;
        border-radius: 5px;
        padding: 5px 15px;
    }

    .carrinho a {
        color: #FAFAFA;
    }

    /*PESQUISA */
    .search {
        display: flex;
        width: 40%;
    }

    input {
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        background-color: #FAFAFA;
        padding: 8px;
        border: 1px solid #A6A39F;
        border-radius: 4px;
    }

    button {
        display: flex;
        align-self: center;
        border: none;
        background-color: #FAFAFA;
        margin-left: -25px;

    }

    /*MENU */
    .menu {
        display: none;
    }


    /*RESPONSIVO */
    @media (max-width: 960px) {
        .search {
            order: 1;
        }
        header {
            display: flex;
            flex-wrap: wrap;
        }
        .search {
            width: 100%;
        }

        @media (max-width: 680px) {
            .menu {
                display: flex;
            }
            .menu button {
                cursor: pointer;
            }
            nav {
                display: none;
            }
        }
    }
`;
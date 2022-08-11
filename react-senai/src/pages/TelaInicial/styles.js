import styled from "styled-components";
import { shade } from "polished";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  height: 6.6rem;
  padding-left: 1.1rem;
  padding-right: 1.1rem;

  background-color: #ADADAD;

  div {
    display: flex;
    align-items: center;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  font-size: 1.6rem;

  img {
    height: 5rem;
  }
`

export const TextoLogo = styled.h2`
  font-size: 15pt;
  font-weight: normal;
`

export const Img = styled.img``

export const Dropdown = styled.div`
  height: 5rem;
  margin-left: 1rem;
  position: relative;
  display: inline-block;

  img {
    color: white;
    padding: 1rem;
    font-size: 1.6rem;
    border: none;
  }

  div {
    top: 5rem;
    right: 0rem;
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 17rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  div a {
    color: black;
    padding: 1.2rem 1.6rem;
    text-decoration: none;
    display: block;
  }

  div a:hover {
    background-color: ${shade(0.1, "#f1f1f1")};
  }

  &&:hover {
    img {
      background-color: ${shade(0.4, "#f1f1f1")};
    }

    div {
      display: block;
    }
  }
`

export const P = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
`

export const Main = styled.main`
  display: flex;
  width: 100vw;
  height: calc(100vh - 6.6rem);
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
  margin-top: 0.8rem;
`

export const MenuLateral = styled.div`
  width: 26.7rem;
  height: 100%;
  background-color: #D9D9D9;

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  div.usuarios {
    margin-top: 2rem;
  }

  div.produtos {
    margin-top: 8.3rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    margin-top: 1.4rem;
    padding-left: 3.2rem;
    list-style: none;
  }

  ul li {
    font-size: 1.4rem;
    text-decoration: underline;
  }

  ul li span {
    color: #000;
    cursor: pointer;

    &.active {
      color: blue;
    }
  }
`

export const Fundo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 6.7rem);

  img {
    height: 24vh;
  }
`
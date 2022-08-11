import styled from "styled-components";
import { shade } from "polished";
import fundo from "./img/fundo.png"

export const Container = styled.div`
  background-image: url("${fundo}");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
  margin-top: 6rem;
  width: 35rem;
  padding: 4rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.849));
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.452);
  border-radius: 1rem;
`

export const Title = styled.h1`
  font: normal 21pt Arial;
  margin-bottom: 4rem;
  border-bottom: 0.3rem solid #55B07D;
  color: #55B07D;
`;

export const Img = styled.img`
  position: absolute;
  top: 1.1rem;
  height: 10rem;
`

export const Form = styled.div``;

export const Label = styled.p`
  font: normal 13pt Arial;
  margin-top: 3.5rem;
  color: rgba(235, 235, 235, 0.733);
`

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  font: normal 11pt Arial;
  color: rgba(255, 255, 255, 0.959);
  border: none;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #55B07D;
`

export const NaoAutenticado = styled.p`
  margin-top: 1.5rem;
  font-size: 13pt;
  text-align: center;
  color: red;
`

export const Button = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  height: 4.5rem;
  font: normal 15pt Arial;
  color: white;
  background-color: #55B07D;
  border: none;
  border-radius: 0.5rem;

  &:hover {
    color: ${shade(0.1, "#FFFFFF")};
    background-color: ${shade(0.1, "#55B07D")};
  }

  &:active {
    color: ${shade(0.1, "#FFFFFF")};
    background-color: ${shade(0.2, "#55B07D")};
  }
`;

export const ForgotPass = styled.div`
  margin-top: 1.5rem;
  text-align: center;

  a {
    font: normal 12pt Arial;
    color: rgba(235, 235, 235, 0.733);
    text-decoration: none;

    &:hover {
      color: white;
      cursor: pointer;
    }
  }
`;

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

export const TrocarSenhaBox = styled.div`
  margin-top: 60px;
  width: 350px;
  padding: 40px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.623), rgba(0, 0, 0, 0.849));
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.452);
  border-radius: 10px;
`

export const Title = styled.h1`
  font: normal 21pt Arial;
  padding-bottom: 1px;
  border-bottom: 3px solid #55B07D;
  color: #55B07D;
`;

export const Img = styled.img`
  position: absolute;
  top: 1.1rem;
  height: 5rem;
`

export const Form = styled.div``;

export const Label = styled.p`
  font: normal 13pt Arial;
  margin-top: 2.5rem;
  color: rgba(235, 235, 235, 0.733);
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
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
  margin-top: 32px;
  width: 100%;
  height: 45px;
  font: normal 15pt Arial;
  color: white;
  background-color: #55B07D;
  border: none;
  border-radius: 5px;

  &:hover {
    color: ${shade(0.1, "#FFFFFF")};
    background-color: ${shade(0.1, "#55B07D")};
  }

  &:active {
    color: ${shade(0.1, "#FFFFFF")};
    background-color: ${shade(0.2, "#55B07D")};
  }
`;

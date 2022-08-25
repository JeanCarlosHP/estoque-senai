import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  margin-top: 13.8rem;
`

export const Main = styled.main`
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  align-items: center;

  width: 71.4rem;
  height: 100%;
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;

  div {
    display: flex;
    gap: 3.2rem;

    width: 100%;
  }
`

export const Input = styled.input`
  height: 5.2rem;
  width: 100%;

  border-radius: 0.4rem;
  border: 1px solid #A0A0A0;
  padding-left: 3.2rem;
  placeholder: ${(props) => props.placeholder};

  background: #D9D9D9;

  &::placeholder {
    font-size: 2rem;
  }
`

export const Dropdown = styled.div`
  position: relative;
  width: 17rem !important;

  &:after {
    content: '>';
    font: 1.7rem "Consolas", monospace;
    color: #333;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 1.1rem;
    
    top: 1.5rem;
    padding: 0 0 2px;
    border-bottom: 1px solid #999;
    
    position: absolute;
    pointer-events: none;
  }

  select {
    width: 100%;
  
    padding: 1.6rem;
    -webkit-appearance: none;
    background-image: url("./img/arrow.svg");

    background-color: #D9D9D9;
    border: 1px solid #A0A0A0;
    border-radius: 0.4rem;
  }
`

export const Button = styled.button`
  width: 22.2rem;
  height: 5.2rem;
  border-radius: 0.8rem;
  background-color: #D9D9D9;
  border: none;

  &:hover {
    background-color: ${shade(0.1, "#D9D9D9")};
  }

  &:active {
    background-color: ${shade(0.2, "#D9D9D9")};
  }
`

export const Erro = styled.p`
  font-size: 13pt;
  text-align: center;
  color: red;
`

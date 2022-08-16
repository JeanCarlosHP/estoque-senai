import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid #000;
  height: 6.8rem;
  width: 100%;

  h2 {
    font-size: 22pt;
    font-weight: normal;
  }
`

export const Main = styled.main`
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 10rem;

  div {
    display: flex;
    gap: 3.2rem;
  }
`

export const Input = styled.input`
  height: 5.2rem;
  width: ${(props) => props.width + "rem"};

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

  &:after {
    content: '>';
    font: 17px "Consolas", monospace;
    color: #333;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 11px;
    
    top: 15px;
    padding: 0 0 2px;
    border-bottom: 1px solid #999;
    
    position: absolute;
    pointer-events: none;
  }

  select {
    width: 12.7rem;
  
    padding: 1.6rem;
    -webkit-appearance: none;
    background-image: url("./img/arrow.svg");

    background-color: #D9D9D9;
    border: 1px solid #A0A0A0;
    border-radius: 0.4rem;
  }
`
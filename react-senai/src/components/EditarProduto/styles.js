import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 6.6rem;

  background-color: #f1f1f1;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 55.5rem;
  margin: 5rem auto 0 auto;

  & div {
    display: flex;
    gap: 3.2rem
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;

  & p {
    font-size: 15pt;
  }
`

export const Label = styled.div`
  display: inline-block;
  padding: 1.6rem;
  border: 1px solid #A0A0A0;

  background-color: #D9D9D9;
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

export const Textarea = styled.textarea`
  border-radius: 0.4rem;
  border: 1px solid #A0A0A0;
  padding: 1.5rem 3.2rem;
  placeholder: ${(props) => props.placeholder};

  background: #D9D9D9;
  resize: none;

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

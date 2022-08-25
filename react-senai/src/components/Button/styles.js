import styled from "styled-components";
import { shade } from "polished";

export const ContainerButton = styled.button`
  padding: 0.8rem;
  border-radius: 0.8rem;
  border: 1px solid #A0A0A0;
  background-color: #D9D9D9;

  &:hover {
    background-color: ${shade(0.1, "#D9D9D9")};
  }

  &:active {
    background-color: ${shade(0.2, "#D9D9D9")};
  }
`
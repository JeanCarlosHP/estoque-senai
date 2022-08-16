import styled from "styled-components";
 
export const Container = styled.div`
  display: flex;
  justify-content: center;
 
  width: 100%;
  height: 100%;
  margin-top: 10rem;
 
  div {
    max-width: 60.6rem;
 
    .rdt_TableBody {
      gap: 0.8rem;
    }
 
    .rdt_TableCol_Sortable {
      justify-content: center;
    }
 
    .rdt_TableCell {
      display: flex;
      justify-content: center;
     
      &:first-child {
        border-radius: 0.8rem 0 0 0.8rem;
      }
 
      &:last-child {
        border-radius: 0 0.8rem 0.8rem 0;
      }
    }
  }
`

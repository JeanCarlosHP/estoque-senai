import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
 
  width: 100%;
  height: 100%;
  margin-top: 11rem;
 
  div {
    position: static;
    .rdt_Table {
      max-width: 60.6rem;
      margin-left: auto;
      margin-right: auto;
      margin-top: 5rem;
      margin-bottom: 3rem;
    }

    .rdt_TableHeadRow {
      background-color: #f1f1f1;
      font-size: 1.5rem;
    }
 
    .rdt_TableBody {
      gap: 0.8rem;
      background-color: #f1f1f1;
    }

    .rdt_TableRow {
      background-color: #f1f1f1;

      div button {
        background-color: #D9D9D9;
        border-radius: 0.8rem 0 0 0.8rem;
        border: 1px solid #A0A0A0;

        &:hover {
          background-color: ${shade(0.1, "#D9D9D9")};
        }

        &:active {
          background-color: ${shade(0.2, "#D9D9D9")};
        }
      }
    }

    .rdt_ExpanderRow {
      background-color: #D9D9D9;
      border-radius: 0.8rem;
      padding: 0.8rem;
    }
 
    .rdt_TableCol_Sortable {
      justify-content: center;
    }
 
    .rdt_TableCell {
      display: flex;
      justify-content: center;

      background-color: #D9D9D9;
      border: 1px solid #A0A0A0;
 
      &:last-child {
        border-radius: 0 0.8rem 0.8rem 0;
      }
    }
  }
`

import React from "react";
import api from "../../services/api";

import { Container, Header, Main, Input, Dropdown } from "./style";

export function Cadastro() {

  return (
    <Container>
      <Header>
        <h2>Cadastrar Usuário</h2>
      </Header>

      <Main>
        <div>
          <Input width={55.5} placeholder="Nome" />

          <Dropdown>
            <select>
              <option>Usuário</option>
              <option>Admin</option>
            </select>
          </Dropdown>
        </div>

        <div>
          <Input width={55.5} placeholder="Usuário" />
          <Input width={31} placeholder="Senha" />
        </div>

      </Main>
    </Container>
  )
}

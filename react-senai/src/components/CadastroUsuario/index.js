import React, { useState } from "react";
import api from "../../services/api";

import Header from "../Header";

import { Container, Main, Input, Dropdown, Button, Erro } from "./styles";

export function CadastroUsuario() {
  const [nome, setNome] = useState("")
  const [permissao, setPermissao] = useState("user")
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState(false)

  const handleSubmit = () => {
    if (nome === "" | usuario === "" | senha === "") {
      setErro(true)
    } else {
      setErro(false)
      api.post("/cadastrarUsuario", "", {
        headers: {
          'nome': nome,
          'permissao': permissao,
          'usuario': usuario,
          'senha': senha
        }
      }
      )
    }
  }

  return (
    <Container>
      <Header title="Cadastrar Usuário" />

      <Main>
        <div>
          <Input placeholder="Nome" onChange={e => setNome(e.target.value)} />

          <Dropdown>
            <select onChange={e =>
              e.target.value === "Usuário"
                ? setPermissao("user")
                : setPermissao("admin")
            }>
              <option>Usuário</option>
              <option>Admin</option>
            </select>
          </Dropdown>
        </div>

        <div>
          <Input placeholder="Usuário" onChange={e => setUsuario(e.target.value)} />
          <Input placeholder="Senha" onChange={e => setSenha(e.target.value)} />
        </div>

        {erro && <Erro>Preencha todos os campos!</Erro>}

        <Button onClick={handleSubmit}>Cadastrar Usuário</Button>
      </Main>
    </Container>
  )
}

import React, { useState } from "react";
import api from "../../services/api";

import Header from "../Header";

import { Container, Main, Input, Button, Erro } from "./styles";

const CadastroProdutos = () => {
  const [nome, setNome] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [valor, setValor] = useState("")
  const [descricao, setDescricao] = useState("")
  const [erro, setErro] = useState(false)

  const idUsuario = localStorage.getItem("idUsuario")

  const handleSubmit = () => {
    if (nome === "" | quantidade === "" | valor === ""| descricao === "") {
      setErro(true)
    } else {
      setErro(false)
      api.post("/cadastrarProduto", "", {
        headers: {
          'nome': nome,
          'descricao': descricao,
          'quantidade': quantidade,
          'valor': valor,
          'id_usuario': idUsuario
        }
      }
      )
    }
  }

  return (
    <Container>
      <Header title="Cadastrar Produtos" />

      <Main>
        <div>
          <Input placeholder="Nome do Produto" value={nome} onChange={e => setNome(e.target.value)} />
        </div>

        <div>
          <Input placeholder="Quantidade" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
          <Input placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} />
        </div>

        <div>
          <Input placeholder="Detalhes do produto" value={descricao} onChange={e => setDescricao(e.target.value)} />
        </div>

        {erro && <Erro>Preencha todos os campos!</Erro>}

        <Button onClick={handleSubmit}>Cadastrar Produto</Button>
      </Main>
    </Container>
  )
}

export default CadastroProdutos;

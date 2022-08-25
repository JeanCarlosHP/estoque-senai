import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";
import api from "../../services/api"

import Header from "../Header";
import Button from "../Button"

import { Container, Label, Input, Dropdown, Form, Info, Textarea } from "./styles";

const EditarProdutos = () => {
  const { idEditar, nomeProdutoEditar, setModalEditar } = useGlobalContext()

  const [status, setStatus] = useState(1)
  const [novoNome, setNovoNome] = useState("")
  const [novoValor, setNovoValor] = useState("")
  const [novaQuantidade, setNovaQuantidade] = useState("")
  const [novaDescricao, setNovaDescricao] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    api.put("/editarProduto", "", {
        headers: {
          'id_produto': idEditar,
          'novo_nome': novoNome !== '' ? novoNome : '',
          'novo_valor': novoValor !== '' ? novoValor : '',
          'nova_quantidade': novaQuantidade !== '' ? novaQuantidade : '',
          'nova_descricao': novaDescricao !== '' ? novaDescricao : '',
          'ativo': status,
          'id_usuario': localStorage.getItem("idUsuario"),
        }
      }).then((res) => {
        window.location.reload(false)
        setModalEditar(false)
      }).catch(e => {
        console.log(e)
      })
  }

  return (
    <Container>
      <Header title="Editar Produto" />

      <Info>
        <p>Produto sendo editado</p>
        <div>
          <Label>{idEditar}</Label>
          <Label>{nomeProdutoEditar}</Label>
        </div>
      </Info>

      <Form>
        <div>
          <Input 
            placeholder="Novo nome" 
            value={novoNome} 
            onChange={e => setNovoNome(e.target.value)}
          />

          <Dropdown>
            <select onChange={e =>
              e.target.value === "Ativo"
                ? setStatus(1)
                : setStatus(0)
            }>
              <option>Ativo</option>
              <option>Desativado</option>
            </select>
          </Dropdown>
        </div>

        <div>
          <Input 
            placeholder="Novo valor" 
            value={novoValor} 
            onChange={e => setNovoValor(e.target.value)} 
          />

          <Input 
            placeholder="Nova quantidade" 
            value={novaQuantidade} 
            onChange={e => setNovaQuantidade(e.target.value)} 
          />
        </div>

        <Textarea 
          placeholder="Nova descrição" 
          value={novaDescricao}
          onChange={e => setNovaDescricao(e.target.value)}
          style={{ height: "12.6rem" }} 
        />

        <Button
          title="Editar produto"
          onClick={handleSubmit}
          style={{
            width: '22.2rem',
            margin: '0 auto 0 auto'
          }} />
      </Form>
    </Container>
  );
}

export default EditarProdutos;

import React from "react";
import { useGlobalContext } from "../../context/context";

import { Container } from "./styles";
import Button from "../Button";
import api from "../../services/api";

const ExpandableComponent = ({ row }) => {
  const { modalEditar, setModalEditar, setIdEditar, setNomeProdutoEditar } = useGlobalContext()
  const idUsuario = localStorage.getItem("idUsuario")
  let count = 0

  const handleButtonEditar = () => {
    setIdEditar(row.data.id_produto)
    setNomeProdutoEditar(row.data.nome_produto)
    setModalEditar(!modalEditar)
  }

  const handleButtonExcluir = () => {
    count++
    
    if (count === 2) {
      count = 0
      api.delete('/deletarProduto', '', {
        headers: {
          'id_produto': row.data.id_produto,
          'id_usuario': idUsuario
        }
      })
    }
  }
  
  return (
    <Container>
      <Button title="Editar" onClick={handleButtonEditar} />
      <Button title="Deletar" onClick={handleButtonExcluir} />
    </Container>
  );
}

export default ExpandableComponent;

import React, { useEffect, useState } from "react";
import api from "../../services/api";
 
import DataTable from 'react-data-table-component';
 
import { Container } from "./styles";
import Header from "../Header";
 
const ListarProdutos = () => {
  const [data, setData] = useState({})
 
  useEffect(() => {
    api.get("/listarProdutos")
      .then((res) => {
        setData(res.data)
      })
  }, [])
 
  const columns = [
    {
      name: 'ID',
      selector: row => row.id_produto,
      sortable: true
    },
    {
      name: 'Nome',
      selector: row => row.nome_produto,
      sortable: true
    },
    {
      name: 'Quant.',
      selector: row => row.quantidade_produto,
      sortable: true
    },
    {
      name: 'Valor',
      selector: row => row.valor_produto,
      sortable: true
    },
    {
      name: 'Ativo',
      selector: row => row.ativo == 0 ? "Não" : "Sim",
      sortable: true,
    },
  ];
 
  return (
    <>
    <Container>
      <Header title="Listar Produtos" />

      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </Container>
    </>
  )
}
 
export default ListarProdutos

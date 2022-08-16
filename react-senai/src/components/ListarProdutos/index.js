import React, { useEffect, useState } from "react";
import api from "../../services/api";
 
import DataTable from 'react-data-table-component';
 
import { Container } from "./styles";
 
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
 
  const customStyles = {
    headCells: {
      style: {
        background: '#f1f1f1',
        fontSize: '1.5rem',
      },
    },
    cells: {
      style: {
        background: '#D9D9D9',
        border: '1px solid #A0A0A0',
      },
    },
  };
 
 
  return (
    <Container>
      <div>
        <DataTable columns={columns} data={data} customStyles={customStyles} />
      </div>
    </Container>
  )
}
 
export default ListarProdutos

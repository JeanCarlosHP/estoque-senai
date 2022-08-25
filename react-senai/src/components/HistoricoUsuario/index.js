import React, { useState, useEffect } from "react";
import api from "../../services/api";

import DataTable from 'react-data-table-component';
 
import { Container } from "./styles";
import Header from "../Header";

const Historico = () => {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    api.get("/listarHistorico")
    .then((res) => {
      console.log(res.data);
      setHistorico(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  const columns = [
    {
      name: 'ID',
      selector: row => row.id_historico,
      sortable: true
    },
    {
      name: 'Nome',
      selector: row => row.nome_produto,
      sortable: true
    },
    {
      name: 'Quant.',
      selector: row => row.quantidade ,
      sortable: true
    },
    {
      name: 'Valor',
      selector: row => row.valor_produto,
      sortable: true
    },
    {
      name: 'Processo',
      selector: row => row.nome_processo,
      sortable: true
    },
    {
      name: 'Usuário',
      selector: row => row.usuario,
      sortable: true
    },
    {
      name: 'Remetente',
      selector: row => row.nome_remetente,
      sortable: true
    },
    {
      name: 'Destinatário',
      selector: row => row.nome_destinatario,
      sortable: true
    },
    {
      name: 'Data',
      selector: row => {
        const date = new Date(row.data_registro)
        return date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()
          },
      sortable: true
    },
  ]

  return (
    <>
    <Container>
      <Header title="Histórico" />

      <div>
        <DataTable columns={columns} data={historico} />
      </div>
    </Container>
    </>
  )
}

export default Historico
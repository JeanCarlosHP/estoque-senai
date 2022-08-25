import React, { useState, useEffect } from "react";
import api from "../../services/api";

import DataTable from 'react-data-table-component';
 
import { Container } from "./styles";
import Header from "../Header";

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api.get("/listarUsuarios")
    .then((res) => {
      setUsuarios(res.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  const columns = [
    {
      name: 'ID',
      selector: row => row.id_usuario,
      sortable: true
    },
    {
      name: 'Nome',
      selector: row => row.nome_usuario,
      sortable: true
    },
    {
      name: 'Usuário',
      selector: row => row.usuario,
      sortable: true
    },
    {
      name: 'Permissão',
      selector: row => row.nome_permissao,
      sortable: true
    }
  ]

  return (
    <>
    <Container>
      <Header title="Listar Usuários" />

      <div>
        <DataTable columns={columns} data={usuarios} />
      </div>
    </Container>
    </>
  )
}

export default ListarUsuarios
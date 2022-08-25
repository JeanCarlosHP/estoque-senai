import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";

import { Header, Logo, TextoLogo, Img, P, Main, Line, Dropdown, MenuLateral, Fundo } from "./styles";

import { CadastroUsuario } from "../../components/CadastroUsuario"
import ListarUsuarios from "../../components/ListarUsuarios";
import CadastroProdutos from "../../components/CadastroProdutos"
import ListarProdutos from "../../components/ListarProdutos"
import Historico from "../../components/HistoricoUsuario"
import EditarProduto from "../../components/EditarProduto"

import logo from "./img/logo-grupo-malwee.svg"
import setaSair from "./img/seta-sair.svg"
import fundo from "./img/fundo-malwee.svg"

const TelaInicial = () => {
  const { modalEditar } = useGlobalContext()
  const [atual, setAtual] = useState("")
  const permissao = localStorage.getItem("permissao")

  const handleSpan = (e) => {
    if (atual !== "") {
      document.getElementById(atual).classList.remove("active")
    }

    setAtual(e.target.id)
    document.getElementById(e.target.id).className = "active"
  }

  return (
    <>
      <Header>
        <Logo>
          <Img src={logo} alt="Logo Grupo Malwee" />
          <TextoLogo>GrupoMalwee</TextoLogo>
        </Logo>

        <div>
          <P>{localStorage.getItem("nomeUsuario")}</P>

          <Dropdown>
            <img src={setaSair} alt="seta sair" />
            <div>
              <a href="/login">Sair</a>
            </div>
          </Dropdown>
        </div>
      </Header>

      <Main>
        <MenuLateral>
          <div className="usuarios">
            <h2>Usuários</h2>
            <Line />
            <ul>
              {permissao === 'admin' && <li><span id="user_cadastro" onClick={handleSpan}>Cadastrar</span></li>}
              <li><span id="user_listar" onClick={handleSpan}>Listar</span></li>
            </ul>
          </div>
          <div className="produtos">
            <h2>Produtos</h2>
            <Line />
            <ul>
              <li><span id="produto_cadastro" onClick={handleSpan}>Cadastrar</span></li>
              <li><span id="produto_listar" onClick={handleSpan}>Listar</span></li>
              <li><span id="produto_historico" onClick={handleSpan}>Histórico</span></li>
            </ul>
          </div>
        </MenuLateral>

        <Fundo>
          {atual === "" && <img src={fundo} alt="Fundo Malwee" />}
          {atual === "user_cadastro" && <CadastroUsuario />}
          {atual === "user_listar" && <ListarUsuarios />}
          {atual === "produto_cadastro" && <CadastroProdutos />}
          {atual === "produto_listar" && <ListarProdutos />}
          {atual === "produto_historico" && <Historico />}
          {modalEditar && <EditarProduto />}
        </Fundo>
      </Main>
    </>
  );
};

export default TelaInicial;

import React, { useState } from "react";
import api from "../../services/api";
import { useGlobalContext } from "../../context/context";

import { Header, Logo, TextoLogo, Img, P, Main, Line, Dropdown, MenuLateral, Fundo } from "./styles";

import { Cadastro } from "../../components/Cadastro"
import ListarProdutos from "../../components/ListarProdutos"
 
import logo from "./img/logo-grupo-malwee.svg"
import setaSair from "./img/seta-sair.svg"

const TelaInicial = () => {
  const [atual, setAtual] = useState("")
  const { nomeUsuario } = useGlobalContext()

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
          <P>{nomeUsuario}</P>

          <Dropdown>
            <img src={setaSair} />
            <div>
              <a href="/login">Trocar de Usuário</a>
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
              <li><span id="user_cadastro" onClick={handleSpan}>Cadastrar</span></li>
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
          {/* <img src={fundo} alt="Fundo Malwee" /> */}
          {/* <Cadastro /> */}
          <ListarProdutos />
        </Fundo>

      </Main>
    </>
  );
};

export default TelaInicial;

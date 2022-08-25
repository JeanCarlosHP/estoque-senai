import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import { Container, Img, TrocarSenhaBox, Title, Form, Button, Label, Input, Erro } from "./styles";
import logo from "./img/fundo-malwee-logo.png"

const TrocarSenha = () => {
  const [usuario, setUsuario] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [usuarioAdmin, setUsuarioAdmin] = useState("");
  const [senhaAdmin, setSenhaAdmin] = useState("");
  const [naoAutenticado, setNaoAutenticado] = useState(false)
  const [erro, setErro] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = () => {
    api.put("/trocarSenha", "", {
      headers: {
        'usuario': usuario,
        'nova_senha': novaSenha,
        'usuario_admin': usuarioAdmin,
        'senha_admin': senhaAdmin
      }
    }).then((res) => {
      if (res.data === "invalid_admin") {
        setNaoAutenticado(true)
        setErro(false)
      } else if (res.data === "updated") {
        setNaoAutenticado(false)
        setErro(false)

        navigate("/login")
      }
    }).catch(e => {
      setErro(true)
      setNaoAutenticado(false)
    })
  }

  return (
    <Container>
      <Img src={logo} alt="Logo Malwee" />

      <TrocarSenhaBox>
        <Title>Trocar Senha</Title>

        <Form>
          <Label>Usuário</Label>
          <Input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />

          <Label>Nova senha</Label>
          <Input type="password" value={novaSenha} onChange={e => setNovaSenha(e.target.value)} />

          <Label>Usuário Admin</Label>
          <Input type="text" value={usuarioAdmin} onChange={e => setUsuarioAdmin(e.target.value)} />

          <Label>Senha Admin</Label>
          <Input type="password" value={senhaAdmin} onChange={e => setSenhaAdmin(e.target.value)} />

          {naoAutenticado && <Erro>Usuário e ou senha inválido</Erro>}
          {erro && <Erro>Erro interno!</Erro>}

          <Button onClick={handleSubmit}>Trocar</Button>
        </Form>
      </TrocarSenhaBox>
    </Container>
  );
};

export default TrocarSenha;

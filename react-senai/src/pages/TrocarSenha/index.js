import React, { useState } from "react";
import api from "../../services/api";

import { Container, Img, TrocarSenhaBox, Title, Form, Button, Label, Input, NaoAutenticado } from "./styles";
import logo from "./img/fundo-malwee-logo.png"

const TrocarSenha = () => {
  const [usuario, setUsuario] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [usuarioAdmin, setUsuarioAdmin] = useState("");
  const [senhaAdmin, setSenhaAdmin] = useState("");
  const [naoAutenticado, setNaoAutenticado] = useState(false)

  const handleSubmit = () => {
    api.put("/trocarSenha", "", {
      headers: {
        'usuario': usuario,
        'nova_senha': novaSenha,
        'usuario_admin': usuarioAdmin,
        'senha_admin': senhaAdmin
      }
    }).then((res) => {
      if (res.data.length === 0) {
        setNaoAutenticado(true)
      } else {
        setNaoAutenticado(false)
      }
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

          <Label>Senha Nova</Label>
          <Input type="password" value={novaSenha} onChange={e => setNovaSenha(e.target.value)} />

          <Label>Usuário Admin</Label>
          <Input type="text" value={usuarioAdmin} onChange={e => setUsuarioAdmin(e.target.value)} />

          <Label>Senha Admin</Label>
          <Input type="password" value={senhaAdmin} onChange={e => setSenhaAdmin(e.target.value)} />

          {naoAutenticado && <NaoAutenticado>Usuário e ou senha inválido</NaoAutenticado>}

          <Button onClick={handleSubmit}>Trocar</Button>
        </Form>
      </TrocarSenhaBox>
    </Container>
  );
};

export default TrocarSenha;

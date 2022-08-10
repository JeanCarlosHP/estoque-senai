import React, { useState } from "react";
import api from "../../services/api";

import { Container, Img, LoginBox, Title, Form, Button, ForgotPass, Label, Input, NaoAutenticado } from "./styles";
import logo from "./img/fundo-malwee-logo.png"

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [naoAutenticado, setNaoAutenticado] = useState(false)

  const handleSubmit = () => {
    api.post("/login", "", {
      headers: {
        'usuario': usuario,
        'senha': senha
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

      <LoginBox>
        <Title>Login</Title>

        <Form>
          <Label>Usuário</Label>
          <Input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />

          <Label>Senha</Label>
          <Input type="password" value={senha} onChange={e => setSenha(e.target.value)} />

          {naoAutenticado && <NaoAutenticado>Usuário e ou senha inválido</NaoAutenticado>}

          <Button onClick={handleSubmit}>Entrar</Button>
          <ForgotPass>
            <a href="/trocarSenha">Esqueceu sua Senha?</a>
          </ForgotPass>
        </Form>
      </LoginBox>
    </Container>
  );
};

export default Login;

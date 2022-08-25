import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

import api from "../../services/api";

import { Container, Img, LoginBox, Title, Form, Button, ForgotPass, Label, Input, Erro } from "./styles";
import logo from "./img/fundo-malwee-logo.png"

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [naoAutenticado, setNaoAutenticado] = useState(false)
  const [erro, setErro] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = () => {
    api.post("/login", "", {
      headers: {
        'usuario': usuario,
        'senha': senha
      }
    }).then((res) => {
      if (res.data.length === 0) {
        setNaoAutenticado(true)
        setErro(false)
      } else {
        setNaoAutenticado(false)
        setErro(false)

        const {id_usuario, nome_usuario, nome_permissao} = res.data[0]

        localStorage.setItem("idUsuario", id_usuario)
        localStorage.setItem("nomeUsuario", nome_usuario)
        localStorage.setItem("permissao", nome_permissao)

        navigate("/telaInicial")
      }
    }).catch(e => {
      setErro(true)
      setNaoAutenticado(false)
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

          {naoAutenticado && <Erro>Usuário e ou senha inválido</Erro>}
          {erro && <Erro>Erro interno</Erro>}

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

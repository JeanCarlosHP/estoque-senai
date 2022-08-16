import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

import api from "../../services/api";

import { Container, Img, LoginBox, Title, Form, Button, ForgotPass, Label, Input, Erro } from "./styles";
import logo from "./img/fundo-malwee-logo.png"

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [naoAutenticado, setNaoAutenticado] = useState(false)
  const [erro, setErro] = useState(false)

  const { setNomeUsuario, setPermissao } = useGlobalContext();

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

        const {nome_usuario, nome_permissao} = res.data[0]

        setNomeUsuario(nome_usuario)
        setPermissao(nome_permissao)

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

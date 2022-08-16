import React, { useState } from "react"
import { GlobalContext } from './context/context.js'

import GlobalStyle from "./styles/global"
import RoutesApp from "./routes"

const App = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [permissao, setPermissao] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        nomeUsuario,
        setNomeUsuario,
        permissao,
        setPermissao
      }}
    >
      <RoutesApp />
      <GlobalStyle />
    </GlobalContext.Provider>
  );
};

export default App;

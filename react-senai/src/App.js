import React, { useState } from "react"
import { GlobalContext } from './context/context.js'

import GlobalStyle from "./styles/global"
import RoutesApp from "./routes"

const App = () => {
  const [modalEditar, setModalEditar] = useState(false);
  const [rows, setRows] = useState([]);
  const [idEditar, setIdEditar] = useState(0);
  const [nomeProdutoEditar, setNomeProdutoEditar] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        modalEditar,
        setModalEditar,
        rows,
        setRows,
        idEditar,
        setIdEditar,
        nomeProdutoEditar,
        setNomeProdutoEditar,
      }}
    >
      <RoutesApp />
      <GlobalStyle />
    </GlobalContext.Provider>
  );
};

export default App;

import { createContext, useContext } from 'react'

export const GlobalContext = createContext({
  nomeUsuario: "",
  setNomeUsuario: () => {},
  permissao: "",
  setPermissao: () => {}
})

export const useGlobalContext = () => useContext(GlobalContext)
import { createContext, useContext } from 'react'

export const GlobalContext = createContext({
  modalEditar: "",
  setModalEditar: () => {},
  rows: [],
  setRows: () => {},
  idEditar: "",
  setIdEditar: () => {},
  nomeProdutoEditar: "",
  setNomeProdutoEditar: () => {}
})

export const useGlobalContext = () => useContext(GlobalContext)
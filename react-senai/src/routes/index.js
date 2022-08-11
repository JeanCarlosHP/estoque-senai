import React from "react";
import {BrowserRouter, Routes ,Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import TrocarSenha from "../pages/TrocarSenha";
import TelaInicial from "../pages/TelaInicial";

const RoutesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" index element={<Login />} />
      <Route path="/trocarSenha" element={<TrocarSenha />} />
      <Route path="/telaInicial" element={<TelaInicial />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;

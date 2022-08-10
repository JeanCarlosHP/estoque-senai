import React from "react";
import {BrowserRouter, Routes ,Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import TrocarSenha from "../pages/TrocarSenha";

const RoutesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" index element={<Login/>}/>
      <Route path="/trocarSenha" element={<TrocarSenha/>} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;

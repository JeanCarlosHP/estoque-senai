DROP DATABASE Estoque;

CREATE DATABASE Estoque;

USE Estoque;

CREATE TABLE Produtos (
  id_produto INTEGER AUTO_INCREMENT PRIMARY KEY,
  nome_produto VARCHAR(25) NOT NULL,
  descricao_produto VARCHAR(100) NOT NULL,
  quantidade_produto INTEGER NOT NULL
);

CREATE TABLE Processos (
  id_processo INTEGER AUTO_INCREMENT PRIMARY KEY,
  nome_processo VARCHAR(10)
);

CREATE TABLE Permissoes (
  id_permissao INTEGER AUTO_INCREMENT PRIMARY KEY,
  nome_permissao VARCHAR(10) NOT NULL,
  id_processo INTEGER NOT NULL,

  FOREIGN KEY (id_processo)
  REFERENCES Processos(id_processo)
);

CREATE TABLE Usuarios (
  id_usuario INTEGER AUTO_INCREMENT PRIMARY KEY,
  nome_usuario VARCHAR(20) NOT NULL,
  id_permissao INTEGER NOT NULL,

  FOREIGN KEY (id_permissao)
  REFERENCES Permissoes(id_permissao)
);

CREATE TABLE Historico (
  id_historico INTEGER AUTO_INCREMENT PRIMARY KEY,
  id_produto INTEGER NOT NULL,
  id_processo INTEGER NOT NULL,
  id_usuario INTEGER NOT NULL,
  data_registro DATE NOT NULL,
  quantidade INTEGER NULL,

  FOREIGN KEY (id_produto)
  REFERENCES Produtos(id_produto),

  FOREIGN KEY (id_processo)
  REFERENCES Processos(id_processo),

  FOREIGN KEY (id_usuario)
  REFERENCES Usuarios(id_usuario)
);

INSERT INTO Produtos (nome_produto, descricao_produto, quantidade_produto) VALUES ("Arroz", "A1", 10);
INSERT INTO Processos (nome_processo) VALUES ("cadastrar");
INSERT INTO Permissoes (nome_permissao, id_processo) VALUES ("admin", 1);
INSERT INTO Usuarios (nome_usuario, id_permissao) VALUES ("Jean", 1);

INSERT INTO Historico (id_produto, id_processo, id_usuario, data_registro) VALUES (1, 1, 1, "2022-07-14");

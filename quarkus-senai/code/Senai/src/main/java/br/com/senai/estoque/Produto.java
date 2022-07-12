package br.com.senai.estoque;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Produto {

  @JsonProperty("id")
  @JsonAlias("id_produto")
  int idProduto;

  @JsonProperty("nome")
  @JsonAlias("nome_produto")
  String nomeProduto;

  @JsonProperty("descricao")
  @JsonAlias("descricao_produto")
  String descricaoProduto;

  @JsonProperty("quantidade")
  int quantidade;
}

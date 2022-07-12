package br.com.senai;

import javax.enterprise.context.ApplicationScoped;
import org.apache.camel.builder.RouteBuilder;

@ApplicationScoped
public class Routes extends RouteBuilder {

	@Override
	public void configure() throws Exception {

		rest()
			// Cadastrar
			.post("/cadastrarProduto")
				.to("direct:cadastrarProduto")

			// Listagem
			.get("/listarProdutos")
				.to("direct:listarProdutos")

			// Editar
			.put("/editarProduto")
				.to("direct:editarProduto")

			// Deletar
			.delete("/deletarProduto")
				.to("direct:deletarProduto")
			
			// Filtrar
			.get("/filtrarProdutos")
				.to("direct:filtrarProdutos")
		;

		from("direct:cadastrarProduto")
			.log("cadastrarProduto")
			.log(":#tipoChamada")
			.to("sql:INSERT INTO Produtos (nome_produto, descricao_produto, quantidade) VALUES (:#nome, :#descricao, :#quantidade)")
		;

		from("direct:listarProdutos")
			.log("listarProdutos")
			.to("sql:SELECT * FROM Produtos")
				// .unmarshal().json(JsonLibrary.Jackson, Text.class)
				// .marshal().json(JsonLibrary.Jackson, Text.class)
		;

		from("direct:editarProduto")
			.log("editarProduto")
		;

		from("direct:deletarProduto")
			.log("deletarProduto")
			.to("sql:DELETE FROM Produtos WHERE id_produto=:#id")
		;

		from("direct:filtrarProdutos")
			.log("filtrarProdutos")
		;
	}
}

package br.com.senai;

import javax.enterprise.context.ApplicationScoped;
import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.model.dataformat.JsonLibrary;

import br.com.senai.estoque.Produto;

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
			.to("sql:INSERT INTO Produtos (nome_produto, descricao_produto, quantidade_produto) VALUES (:#nome, :#descricao, :#quantidade)")
		;

		from("direct:listarProdutos")
			.log("listarProdutos")
			.to("sql:SELECT * FROM Produtos")
				.marshal().json(JsonLibrary.Jackson, Produto[].class)
		;

		from("direct:editarProduto")
			.log("editarProduto")
			.choice()
				.when(simple("${header.campo} == 'nome'"))
					.to("sql:UPDATE Produtos SET nome_produto=:#novoValor WHERE id_produto=:#idProduto")
				.when(simple("${header.campo} == 'descricao'"))
					.to("sql:UPDATE Produtos SET descricao_produto=:#novoValor WHERE id_produto=:#idProduto")
				.when(simple("${header.campo} == 'quantidade'"))
					.to("sql:UPDATE Produtos SET quantidade_produto=:#novoValor WHERE id_produto=:#idProduto")
				.end()
		;

		from("direct:deletarProduto")
			.log("deletarProduto")
			.to("sql:DELETE FROM Produtos WHERE id_produto=:#id")
		;

		from("direct:filtrarProdutos")
			.log("filtrarProdutos")
			.choice()
				.when(simple("${header.tipoFiltro} == 'historico'"))
					.choice()
						.when(simple("${header.filtro} == 'data'"))
							.to("sql:SELECT * FROM Historico ORDER BY data_registro DESC")
					.end()
					.convertBodyTo(String.class)
		;
	}
}

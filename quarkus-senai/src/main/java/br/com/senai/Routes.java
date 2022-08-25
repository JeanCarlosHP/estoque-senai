package br.com.senai;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.apache.camel.builder.RouteBuilder;

import br.com.senai.processors.GetIdProduto;
import br.com.senai.processors.HistoricoProcessor;
import io.agroal.api.AgroalDataSource;

@ApplicationScoped
public class Routes extends RouteBuilder {

	@Inject
	AgroalDataSource dataSource;

	@Override
	public void configure() throws Exception {

		restConfiguration()
				.enableCORS(true)
				.corsAllowCredentials(true)
				.corsHeaderProperty("Access-Control-Allow-Origin", "*")
				.corsHeaderProperty("Access-Control-Allow-Headers", "*");

		rest()
				// Login
				.post("/login")
				.produces("application/json")
				.to("direct:login")

				// Trocar senha
				.put("/trocarSenha")
				.to("direct:trocarSenha");

		from("direct:login")
				.log("login")
				.to("sql:SELECT u.id_usuario, u.nome_usuario, p.nome_permissao FROM Usuarios AS u, Permissoes AS p WHERE u.usuario=:#usuario AND u.senha=:#senha AND p.id_permissao = u.id_permissao")
				.setBody().groovy("body")
				.marshal().json()
				.log("${body}")
		;

		from("direct:trocarSenha")
				.log("trocarSenha")
				.to("sql:SELECT nome_permissao FROM Usuarios AS u, Permissoes AS p  WHERE usuario=:#usuario_admin AND senha=:#senha_admin AND p.id_permissao=u.id_permissao?outputType=SelectOne")
				.choice()
				.when(body().contains("admin"))
				.to("sql:UPDATE Usuarios SET senha=:#nova_senha WHERE usuario=:#usuario")
				.setBody(simple("updated"))
				.otherwise()
				.setBody(simple("invalid_admin"))
				.end()
		;

		rest()
				// Cadastrar
				.post("/cadastrarUsuario")
				.to("direct:cadastrarUsuario")

				// Listar
				.get("/listarUsuarios")
				.to("direct:listarUsuarios")

				// Editar
				.put("/editarUsuario")
				.to("direct:editarUsuario")

				// Deletar
				.delete("/deletarUsuario")
				.to("direct:deletarUsuario");

		from("direct:cadastrarUsuario")
				.log("cadastrarUsuario")
				.to("sql:SELECT id_permissao FROM Permissoes WHERE nome_permissao=:#permissao?outputType=SelectOne")
				.setHeader("id_permissao", simple("${body}"))
				.to("sql:INSERT INTO Usuarios (nome_usuario, usuario, senha, id_permissao) VALUES (:#nome, :#usuario, :#senha, :#id_permissao)")
				.log("${body}");

		from("direct:listarUsuarios")
				.log("listarUsuarios")
				.to("sql:SELECT u.id_usuario, u.nome_usuario, u.usuario, p.nome_permissao FROM Usuarios AS u, Permissoes AS p WHERE u.id_permissao = p.id_permissao")
				.marshal().json();

		from("direct:editarUsuario")
				.log("editarUsuario")
				.choice()
				.when(simple("${header.novo_nome}"))
				.to("sql:UPDATE Usuarios SET nome_usuario=:#novo_nome WHERE id_usuario=:#id")
				.end()
				.choice()
				.when(simple("${header.nova_permissao}"))
				.to("sql:SELECT id_permissao FROM Permissoes WHERE nome_permissao=:#nova_permissao?outputType=SelectOne")
				.setHeader("id_permissao", simple("${body}"))
				.to("sql:UPDATE Usuarios SET id_permissao=:#id_permissao WHERE id_usuario=:#id")
				.end();

		from("direct:deletarUsuario")
				.log("deletarUsuario")
				.to("sql:DELETE FROM Usuarios WHERE id_usuario=:#id");

		rest()
				// Cadastrar
				.post("/cadastrarProduto")
				.produces("application/json")
				.to("direct:cadastrarProduto")

				// Listar
				.get("/listarProdutos")
				.to("direct:listarProdutos")

				// Editar
				.put("/editarProduto")
				.to("direct:editarProduto")

				// Deletar
				.delete("/deletarProduto")
				.to("direct:deletarProduto")

				.get("/listarHistorico")
				.to("direct:listarHistorico");

		from("direct:cadastrarProduto")
				.log("cadastrarProduto")
				.setHeader("CamelSqlRetrieveGeneratedKeys", constant(true))
				.setHeader("CamelSqlGeneratedColumns", constant((Object[]) new String[] { "id_produto" }))
				.to("sql:INSERT INTO Produtos (nome_produto, descricao_produto, quantidade_produto, valor_produto) VALUES (:#nome, :#descricao, :#quantidade, :#valor)")
				.setBody(simple("${headers.CamelSqlGeneratedKeyRows}"))
				.setHeader("processo", constant("cadastrado"))
				.split(body())
				.marshal().json()
				.unmarshal().json()
				.bean(GetIdProduto.class)
				.bean(HistoricoProcessor.class)
				.end()
				.setBody(constant(""));

		from("direct:listarProdutos")
				.log("listarProdutos")
				.to("sql:SELECT * FROM Produtos")
				.marshal().json();

		from("direct:editarProduto")
				.log("editarProduto")
				.choice()
				.when(simple("${header.novo_nome} != ''"))
				.to("sql:UPDATE Produtos SET nome_produto=:#novo_nome WHERE id_produto=:#id_produto")
				.endChoice()
				.end()
				.choice()
				.when(simple("${header.novo_valor} != ''"))
				.to("sql:UPDATE Produtos SET valor_produto=:#novo_valor WHERE id_produto=:#id_produto")
				.endChoice()
				.end()
				.choice()
				.when(simple("${header.nova_quantidade} != ''"))
				.to("sql:UPDATE Produtos SET quantidade_produto=:#nova_quantidade WHERE id_produto=:#id_produto")
				.endChoice()
				.end()
				.choice()
				.when(simple("${header.nova_descricao} != ''"))
				.to("sql:UPDATE Produtos SET descricao_produto=:#nova_descricao WHERE id_produto=:#id_produto")
				.endChoice()
				.end()
				.to("sql:UPDATE Produtos SET ativo=:#ativo WHERE id_produto=:#id_produto")
				.setHeader("processo", constant("editado"))
				.bean(HistoricoProcessor.class);

		from("direct:deletarProduto")
				.log("deletarProduto")
				.to("sql:UPDATE Produtos SET ativo = 0 WHERE id_produto=:#id_produto;")
				.setHeader("processo", constant("deletado"))
				.bean(HistoricoProcessor.class);

		from("direct:listarHistorico")
				.log("listarHistorico")
				.to("sql:SELECT h.id_historico, p.nome_produto, h.quantidade, p.valor_produto, pr.nome_processo, u.usuario, h.nome_remetente, h.nome_destinatario, h.data_registro FROM Historico AS h, Produtos AS p, Processos AS pr, Usuarios AS u WHERE p.id_produto = h.id_produto AND pr.id_processo = h.id_processo AND u.id_usuario = h.id_usuario;")
				.marshal().json();
	}
}

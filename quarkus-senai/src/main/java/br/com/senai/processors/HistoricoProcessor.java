package br.com.senai.processors;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.inject.Named;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;

import io.agroal.api.AgroalDataSource;

@ApplicationScoped
@Named
public class HistoricoProcessor implements Processor {

  @Inject
  AgroalDataSource dataSource;

  @Override
  public void process(Exchange exchange) throws Exception {
    
    String processo = (String) exchange.getIn().getHeader("processo");
    int idUsuario = Integer.parseInt((String) exchange.getIn().getHeader("id_usuario"));
    int idProduto;
    int idProcesso = 0;
 
    if (processo.equals("cadastrado")) {
      idProduto = (int) exchange.getIn().getHeader("id_produto");
    } else {
      idProduto = Integer.parseInt((String) exchange.getIn().getHeader("id_produto"));
    }


    DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyy/MM/dd");
    LocalDateTime dataAtual = LocalDateTime.now();
    String dataFormatada = dateFormat.format(dataAtual);

    try (
        Connection conn = dataSource.getConnection();
        PreparedStatement st = conn.prepareStatement(
            "SELECT id_processo FROM Processos WHERE nome_processo LIKE ?;");
        ) {
      st.setString(1, processo);

      ResultSet rs = st.executeQuery();

      if (rs.next()) {
        idProcesso = rs.getInt("id_processo");
      }

      st.close();
      rs.close();
      conn.close();
    } catch (SQLException e) {
      throw e;
    }
    System.out.println("t");

    try (
        Connection conn = dataSource.getConnection();
        PreparedStatement st = conn.prepareStatement(
            "INSERT INTO Historico (id_produto, id_processo, id_usuario, data_registro) VALUES (?, ?, ?, ?);");) {
      st.setInt(1, idProduto);
      st.setInt(2, idProcesso);
      st.setInt(3, idUsuario);
      st.setString(4, dataFormatada);

      st.execute();

      st.close();
      conn.close();
    } catch (SQLException e) {
      throw e;
    }

  }
}

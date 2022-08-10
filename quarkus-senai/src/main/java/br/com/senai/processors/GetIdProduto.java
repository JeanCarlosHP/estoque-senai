package br.com.senai.processors;

import java.util.Map;

import org.apache.camel.Exchange;
import org.apache.camel.Processor;

@SuppressWarnings("unchecked")
public class GetIdProduto implements Processor {

  @Override
  public void process(Exchange exchange) throws Exception {
    Map<String, Integer> body = (Map<String, Integer>) exchange.getIn().getBody();
    int idProduto = body.get("GENERATED_KEY");

    exchange.getIn().setHeader("id_produto", idProduto);
  }
}

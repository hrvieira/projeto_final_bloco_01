import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Camisa } from "./src/model/Camisa";
import { Short } from "./src/model/Short";

export function main() {

     let opcao, id, tipo, preco: number;
     let nome, cor: string;
     let tamanho: any;

     let tipoProduto = ['Camisa', 'Short'];

     const produtoController: ProdutoController = new ProdutoController();

     produtoController.cadastrar(new Camisa(produtoController.gerarId(), "Regata", 1, 59.99, "Preta", "G"));
     produtoController.cadastrar(new Camisa(produtoController.gerarId(), "Camisa manga longa", 1, 79.99, "Cinza", "G"));

     produtoController.cadastrar(new Short(produtoController.gerarId(), "Short All Black", 2, 69.99, "Preta", 42));
     produtoController.cadastrar(new Short(produtoController.gerarId(), "Short Camuflado", 2, 79.99, "Cinza", 40));

     while (true) {

          console.log("*****************************************************");
          console.log("                                                     ");
          console.log("                 BOM DIA CROSSFIT                    ");
          console.log("                                                     ");
          console.log("*****************************************************");
          console.log("                                                     ");
          console.log("            1 - Listar todos os Produtos             ");
          console.log("            2 - Listar Produto pelo ID               ");
          console.log("            3 - Cadastrar Produto                    ");
          console.log("            4 - Atualizar Produto                    ");
          console.log("            5 - Deletar Produto                      ");
          console.log("            0 - Sair                                 ");
          console.log("                                                     ");
          console.log("*****************************************************");
          console.log("                                                     ");

          console.log("Entre com a opção desejada: ");
          opcao = readlinesync.questionInt("");

          if (opcao == 0) {
               console.log("\nBOM DIA CROSSFIT - Os melhores produtos estão aqui!");
               sobre();
               process.exit(0);
          }

          switch (opcao) {
               case 1:
                    console.log("\n\nListar todos os Produtos\n\n");

                    produtoController.listarTodos();

                    keyPress();
                    break;
               case 2:
                    console.log("\n\nListar Produto pelo ID\n\n");

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.listarPorId(id);

                    keyPress();
                    break;
               case 3:
                    console.log("\n\nCadastrar Produto\n\n");

                    nome = readlinesync.question("Digite o Nome do Produto: ");
                    
                    tipo = readlinesync.keyInSelect(tipoProduto, "Qual o tipo do produto? ", { cancel: false }) + 1;
                    
                    preco = readlinesync.questionFloat("Digite o preco: ");

                    cor  = readlinesync.question("Digite a cor do Produto: ");

                    switch (tipo) {
                         case 1:
                              tamanho = readlinesync.question("Digite o tamanho(P, M, G):");
                              produtoController.cadastrar(new Camisa(produtoController.gerarId(),
                                   nome, tipo, preco, cor, tamanho));

                              break;
                         case 2:
                              tamanho = readlinesync.questionInt("Digite o tamanho:");
                              produtoController.cadastrar(new Short(produtoController.gerarId(),
                                   nome, tipo, preco, cor, tamanho));

                              break;
                    }

                    keyPress();
                    break;
               case 4:
                    console.log("\n\nAtualizar Produto\n\n");

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                    let produto = produtoController.buscarNoArray(id);

                    if (produto !== null){

                         nome = readlinesync.question("Digite o Nome do Produto: ");
                    
                         tipo = produto.tipo;
                         
                         preco = readlinesync.questionFloat("Digite o preco: ");
     
                         cor  = readlinesync.question("Digite a cor do Produto: ");
     
                         switch (tipo) {
                              case 1:
                                   tamanho = readlinesync.question("Digite o tamanho(P, M, G): ");
                                   produtoController.atualizar(new Camisa(id, nome, tipo, preco, cor, tamanho.toUpperCase()));
     
                                   break;
                              case 2:
                                   tamanho = readlinesync.questionInt("Digite o tamanho: ");
                                   produtoController.atualizar(new Short(id, nome, tipo, preco, cor, tamanho));
     
                                   break;
                         }

                    } else {
                         console.log("Produto não Encontrado!")    
                    }

                    keyPress();
                    break;
               case 5:
                    console.log("\n\nDeletar Produto\n\n");

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.deletar(id);

                    keyPress();
                    break;
               default:
                    console.log("\nOpção Inválida!\n");

                    keyPress();
                    break;
          }
     }

}

function sobre(): void {
    console.log("\n*****************************************************\n");
    console.log("Projeto Desenvolvido por: Henrique Vieira");
    console.log("github.com/hrvieira");
    console.log("\n*****************************************************");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
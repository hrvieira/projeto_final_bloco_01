import readlinesync = require("readline-sync");

export function main() {

     let opcao: number;

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

                    keyPress();
                    break;
               case 2:
                    console.log("\n\nListar Produto pelo ID\n\n");

                    keyPress();
                    break;
               case 3:
                    console.log("\n\nCadastrar Produto\n\n");

                    keyPress();
                    break;
               case 4:
                    console.log("\n\nAtualizar Produto\n\n");

                    keyPress();
                    break;
               case 5:
                    console.log("\n\nDeletar Produto\n\n");

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
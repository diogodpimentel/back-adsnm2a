const readline = require(`readline-sync`);

const controlador = require('./controlador');

function menu() {
    console.log(`1. Adicionar contato`);
    console.log(`2 - Listar contatos`);
    console.log(`3 - Buscar contato`);
    console.log(`4 - Atualizar contato`);
    console.log(`5 - Remover contato`);
    console.log(`6. SAIR`);
}

function escolherOpcao(opcao) {
    switch(opcao) {
        case `1`: { 
        const nome = readline.question("Digite o seu nome:  ");
        const email = readline.question("Digite seu e-mail:  ");
        const telefone = readline.question("Digite seu telefone:  ");
        controlador.adicionar(nome,email,telefone);
        break;
        }
        case `2`: {
        const contatos = controlador.listarContato(); //ATENÇÃAOOOOOOOOOOOOOOOOOO NA FUNÇAO ANIMAL, BURROOOOOOOOOO//
        contatos.forEach(contato => console.log(contato.toString())); 
        break;
        }
        case `3`: {
        const nome = readline.question("Digite o seu nome:  ");
        controlador.buscarContato(nome);
        break;
        }
        case `4`: {
        controlador.atualizarContato(); 
        const nome = readline.question("Digite o seu nome:  ");
        break;
        }
        case `5`: {controlador.removerContato(); 
        const nome = readline.question("Digite o seu nome:  ");
        break;}
        case `6`: process.exit(0);
        default: console.log("Opcao invalida");
    }
    readline.question("Pressione ENTER para continuar...");
}

function main() {
    while (true){
        menu();
        const opcao = readline.question("Entre com uma opcao: ");
        escolherOpcao(opcao);
    }
}


main();
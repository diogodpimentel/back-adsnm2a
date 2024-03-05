const readline = require(`readline-sync`);

const Contato = require('./modelo')

const contatos = [];

function adicionar(nome, email, telefone) {
    const novo = new Contato(nome, email, telefone);
    contatos.push(novo);
}


function listarContato(){
    return contatos
    }   

    function buscarContato(nome) { //BUSCANDO INDEPENDENTE DO NOME E DE ESTAR MAIUSCULA OU NÃO
        const regex = new RegExp(nome, 'i'); // 'i' indica que a busca é case-insensitive
        const contatosEncontrados = contatos.filter(contato => regex.test(contato.nome));
        if (contatosEncontrados.length > 0) {
            console.log("Contatos encontrados:");
            contatosEncontrados.forEach(contato => console.log(contato.toString()));
        } else {
            console.log("Nenhum contato encontrado com o nome fornecido.");
        }
    }

    function atualizarContato() {
        const nome = readline.question("Digite o nome do contato que deseja atualizar: ");
        const regex = new RegExp(nome, 'i'); // 'i' indica que a busca é case-insensitive
        const contatosEncontrados = contatos.filter(contato => regex.test(contato.nome));
    
        if (contatosEncontrados.length > 0) {
            console.log("Contatos encontrados:");
            contatosEncontrados.forEach((contato, index) => {
                console.log(`${index + 1}. ${contato.nome}`);
            });
    
            const escolha = readline.questionInt("Escolha o número do contato que deseja atualizar: ");
            if (escolha >= 1 && escolha <= contatosEncontrados.length) {
                const contatoEscolhido = contatosEncontrados[escolha - 1];
                let alterarNome = readline.keyInYNStrict(`Deseja alterar o nome do contato (${contatoEscolhido.nome})? `);
                if (alterarNome) {
                    contatoEscolhido.nome = readline.question("Digite o novo nome: ");
                }
    
                let alterarEmail = readline.keyInYNStrict(`Deseja alterar o e-mail do contato (${contatoEscolhido.email})? `);
                if (alterarEmail) {
                    contatoEscolhido.email = readline.question("Digite o novo e-mail: ");
                }
    
                let alterarTelefone = readline.keyInYNStrict(`Deseja alterar o telefone do contato (${contatoEscolhido.telefone})? `);
                if (alterarTelefone) {
                    contatoEscolhido.telefone = readline.question("Digite o novo telefone: ");
                }
    
                console.log("Contato atualizado com sucesso!");
            } else {
                console.log("Escolha inválida");
            }
        } else {
            console.log("Nenhum contato encontrado com o nome fornecido.");
        }
    }
    

function removerContato(nome){
    const posicao = contatos.findIndex(contato => contato.nome === nome);
    if (posicao >= 0) {
        contatos.splice(posicao, 1);
    } else {
        console.log("Contato não localizado");
    }
}

module.exports = {adicionar, listarContato, buscarContato, atualizarContato, removerContato };

class Contato {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone        
    }

toString (){
    return `${this.nome}-${this.email}-${this.telefone}`;
}

}



module.exports = Contato;
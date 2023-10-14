class Mae {
    nacionalidade;
    corDosOlhos;
    corDoCabelo;

    constructor(nacionalidade, corDosOlhos, corDoCabelo){
        this.nacionalidade = nacionalidade;
        this.corDosOlhos = corDosOlhos;
        this.corDoCabelo = corDoCabelo;
    }

    mostrarCaracteristicas(){
        console.log(`Esta mãe é ${this.nacionalidade}, tem olhos ${this.corDosOlhos} e cabelo ${this.corDoCabelo}.`)
    }
}

const minhaMae = new Mae("brasileira", "castanho escuro", "grisalho");
console.log(minhaMae);
minhaMae.mostrarCaracteristicas();
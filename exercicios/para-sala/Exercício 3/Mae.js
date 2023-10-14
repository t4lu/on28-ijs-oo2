class Mae {
    nacionalidade;
    corDosOlhos;
    corDoCabelo;

    constructor(nacionalidade, corDosOlhos, corDoCabelo) {
        this.nacionalidade = nacionalidade;
        this.corDosOlhos = corDosOlhos;
        this.corDoCabelo = corDoCabelo;
    }

    mostrarCaracteristicas() {
        console.log(`Nacionalidade: ${this.nacionalidade}, Cor dos olhos: ${this.corDosOlhos}, Cor do cabelo: ${this.corDoCabelo}.`)
    }
}

const minhaMae = new Mae("brasileira", "castanho escuro", "grisalho");
console.log(minhaMae);
minhaMae.mostrarCaracteristicas();


class Filha extends Mae {}

const eu = new Filha ("brasileira", "castanho escuro", "castanho claro");

console.log(eu);
eu.mostrarCaracteristicas();
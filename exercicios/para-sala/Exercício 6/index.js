class Animal{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cachorro extends Animal {
    corDoPelo;
    porte;

    constructor(nome, idade, corDoPelo, porte){
        super(nome, idade);
        this.corDoPelo = corDoPelo;
        this.porte = porte;
    }
}

const animal1 = new Animal ("tutu", 4);
console.log(animal1);

const cachorro1 = new Cachorro ("pongo", 15, "caramelo", "grande");
console.log(cachorro1);
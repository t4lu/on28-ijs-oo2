class Animal {
    tipo = 'animal';
    nome;

    constructor(nome){
        this.nome = nome;
    }

    apresente(){
        console.log(`${this.nome} é um ${this.tipo}`); /* o "this" é o que define qual atributo será alterado para a classe. */
    }
}

class Gato extends Animal {
    tipo = 'gato';
}

const animal1 = new Animal("tutu");
animal1.apresente();

const animal2 = new Gato("Jimin");
animal2.apresente(); /* neste caso, a classe Gato herda o método da classe Animal, e substitui o tipo do animal para gato,
sem a necessidade de reimplementar o método na classe Gato.*/
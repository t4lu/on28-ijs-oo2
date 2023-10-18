/* COMPOSIÇÃO: se refere à uma classe que pertence à outra MAS não acontece, não é pela lógica de herança. */

class Motor {
    id;
    modelo;

    constructor(id, modelo) {
        this.id = id;
        this.modelo = modelo;
    }
}

class Carro {
    id;
    modelo;
    motor;

    constructor(id, modelo, motor) {
        this.id = id;
        this.modelo = modelo;
        this.motor = motor;
    }
}

const motorItaliano = new Motor(2116556, "Modelo italiano");
const carro = new Carro (524684, "Opala", motorItaliano); /*estou passando meu objeto motorItaliano como um parâmetro,
e no console ele imprime as informações SEPARADAS, porém como COMPONENTES do Carro :O */
console.log(carro);
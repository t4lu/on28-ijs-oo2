class Ingresso {
    preco = 0;

    constructor(preco){
        this.preco = preco;
    }

    mostrarPreco(){
        console.log(`Este ingresso custa R$${this.preco}.`)
    }
}

const ingressoComum = new Ingresso(100);
console.log(ingressoComum);
ingressoComum.mostrarPreco();
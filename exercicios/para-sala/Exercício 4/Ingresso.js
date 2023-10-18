class Ingresso {
    preco = 10;
    mostrarPreco(){
        console.log(`Este ingresso custa R$${this.preco},00.`)
    }
}

class IngressoNormal extends Ingresso {}

class IngressoVIP extends Ingresso {
    preco = this.preco += 2000 /* aqui, ele recebe a informação da classe mae, Ingresso, cujo preco é 10,
    e soma com o valor que foi atribuido (2000, por exemplo) */
}

const ingressoComum = new Ingresso();
console.log(ingressoComum);
ingressoComum.mostrarPreco();

const ingressoVip = new IngressoVIP(20)
ingressoVip.mostrarPreco()
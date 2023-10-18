class Ingresso {
    lote;
    preco_promocional = 10;
    preco_primeiro_lote = 20;
    preco_segundo_lote = 30;
    preco_terceiro_lote = 40;

    constructor(lote) {
        this.lote = lote;
    }

    mostrarPreco() {
        if (this.lote === 'promocional') {
            console.log(`O ingresso do lote ${this.lote} custa R$${this.preco_promocional},00.`);
        } else if (this.lote === 'primeiro') {
            console.log(`O ingresso do ${this.lote} lote custa R$${this.preco_primeiro_lote},00.`);
        } else if (this.lote === 'segundo') {
            console.log(`O ingresso do ${this.lote} lote custa R$${this.preco_segundo_lote},00.`);
        } else if (this.lote === 'terceiro') {
            console.log(`O ingresso do ${this.lote} lote custa R$${this.preco_terceiro_lote},00.`);
        } else {
            console.log(`Ingressos indisponíveis (Lote não encontrado).`)
        }

    }
}

class IngressoNormal extends Ingresso { 
    mostrarPreco(){
        console.log(`INGRESSO NORMAL`);
        super.mostrarPreco();
    }
}

class IngressoVIP extends Ingresso {
    preco_promocional = 50;
    preco_primeiro_lote = 60;
    preco_segundo_lote = 70;
    preco_terceiro_lote = 80;

    mostrarPreco(){
        console.log(`INGRESSO VIP`);
        super.mostrarPreco();
    }
}


const ingressoNormal = new IngressoNormal('promocional');
ingressoNormal.mostrarPreco();

const ingressoNormal1 = new IngressoNormal('primeiro');
ingressoNormal1.mostrarPreco();

const ingressoNormal2 = new IngressoNormal('segundo');
ingressoNormal2.mostrarPreco();

const ingressoNormal3 = new IngressoNormal('terceiro');
ingressoNormal3.mostrarPreco();

const ingressoNormal4 = new IngressoNormal('quarto'); //não existe.
ingressoNormal4.mostrarPreco();


const ingressoVIP = new IngressoVIP('promocional');
ingressoVIP.mostrarPreco();

const ingressoVIP1 = new IngressoVIP('primeiro');
ingressoVIP1.mostrarPreco();
const ingressoVIP2 = new IngressoVIP('segundo');
ingressoVIP2.mostrarPreco();
const ingressoVIP3 = new IngressoVIP('terceiro');
ingressoVIP3.mostrarPreco();
const ingressoVIP4 = new IngressoVIP('quarto'); //não existe.
ingressoVIP4.mostrarPreco();

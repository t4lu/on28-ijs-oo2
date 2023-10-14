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
		console.log(
		  `Nacionalidade: ${this.nacionalidade}, Cor dos Olhos: ${this.corDosOlhos}, Cor do Cabelo: ${this.corDoCabelo}`
		);
	  }
}

class Filha extends Mae {}

const mae1 = new Mae("brasileira", "castanhos", "ruivo");
mae1.mostrarCaracteristicas();

const filha1  = new Filha ("brasileira", "preto", "preto");
filha1.mostrarCaracteristicas();
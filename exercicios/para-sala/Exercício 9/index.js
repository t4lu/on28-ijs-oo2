class Funcionario {
    nome;
    cpf;
    salario;
    aumento = 0.1;

    constructor(nome, cpf, salario) {
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
    }

    receberAumento() {
        this.salario += this.salario * this.aumento;
        console.log(`Novo salário é R$${this.salario}`);
    }

    exibirDados() {
        console.log(`Nome do funcionário: ${this.nome}\nCPF do funcionário: ${this.cpf}\nSalário do funcionário: R$${this.salario},00`)
    }
}

class Gerente extends Funcionario {
    nivelGerencia;
    aumento = 0.15;

    constructor(nome, cpf, salario, nivelGerencia) {
        super(nome, cpf, salario);
        this.nivelGerencia = nivelGerencia;
    }

    exibirDados() {
        console.log(`Gerente nível: ${this.nivelGerencia};`);
        super.exibirDados();
    }
}

class Assistente extends Funcionario {
    matricula;

    constructor(nome, cpf, salario, matricula) {
        super(nome, cpf, salario);
        this.matricula = matricula;
    }

    exibirDados() {
        console.log(`Matrícula: ${this.matricula}`);
        super.exibirDados();
    }
}

class AssistenteTecnico extends Assistente {
    bonusSalarial;

    constructor(nome, cpf, salario, matricula, bonusSalarial) {
        super(nome, cpf, salario, matricula);
        this.bonusSalarial = bonusSalarial;
    }

    exibirDados() {
        console.log(`Bônus salarial: ${this.bonusSalarial},00`);
        super.exibirDados();
    }
}

class AssistenteAdministrativo extends Assistente {
    turno;
    adicionalNoturno;

    constructor(nome, cpf, salario, matricula, turno, adicionalNoturno){
        super(nome, cpf, salario, matricula);
        this.turno = turno;
        this.adicionalNoturno = adicionalNoturno;
    }

    exibirDados(){
       let turno = this.turno;
        if(turno === 'noturno' || turno === 'noite'){
            console.log(`Turno: ${this.turno}\nAdicional noturno: R$${this.adicionalNoturno},00`)
        } else {
            console.log(`Turno: ${this.turno}`);
        }
    }
}


const funcionario = new Funcionario("talu", 12345678901, 5000);
// console.log(funcionario);
funcionario.exibirDados();
funcionario.receberAumento();

console.log("\n=== ==== === === ==== ==== == === ===\n");

const gerente = new Gerente("Talita", 11109876543, 10000, "Junior");
gerente.exibirDados();
gerente.receberAumento();

console.log("\n=== ==== === === ==== ==== == === ===\n");

const assistente = new Assistente("Abel", 89456721382, 3000, 8345692);
assistente.exibirDados();
assistente.receberAumento();

console.log("\n=== ==== === === ==== ==== == === ===\n");

const assistenteTecnico = new AssistenteTecnico("Anderson", 25436789015, 3200, 968752, 200);
assistenteTecnico.exibirDados();
assistenteTecnico.receberAumento();

console.log("\n=== ==== === === ==== ==== == === ===\n");

const assistenteAdministrativo = new AssistenteAdministrativo("Bruno", 78956241350, 2500,562473,"noturno", 300);
const assistenteAdministrativo1 = new AssistenteAdministrativo("Bruno", 78956241350, 2500, 562473,"noite", 300);
const assistenteAdministrativo2 = new AssistenteAdministrativo("Bruno", 78956241350, 2500, 562473,"dia", 300);
const assistenteAdministrativo3 = new AssistenteAdministrativo("Bruno", 78956241350, 2500,562473,"manhã", 300);

assistenteAdministrativo.exibirDados();
assistenteAdministrativo1.exibirDados();
assistenteAdministrativo2.exibirDados();
assistenteAdministrativo3.exibirDados();
assistenteAdministrativo.receberAumento();
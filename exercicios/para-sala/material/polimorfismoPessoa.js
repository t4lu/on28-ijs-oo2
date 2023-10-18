class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
/* nesse exemplo, o mesmo método existente na classe mãe é sobreescrito pelo respectivo método na classe filha. */
    speak() {
        console.log(`${this.name} está falando.`)
    }
}
class User extends Person {
    email;
    password;

    constructor(name, age, email, password) {
        super(name, age);
        this.email = email;
        this.password = password;
    }
    /* aqui, a implementação está sobrescrevendo o método da classe mãe, dessa forma, "recebendo uma nova forma"; um polimorfismo kkkk pq o método é o mesmo,
    mas o que ele retorna não é a mesma coisa.
    pra lembrar: uma receita de strogonoff de frango, que pode ser strogonoff vegano. (não deixa de ser strogonoff).
    */
    speak() {
        console.log(`A usuária ${this.name} está digitando...`)
    }
}

class Student extends Person {
    email;

    constructor(name, age, email) {
        super(name, age);
        this.email = email;
    }

    speak() {
        console.log(`A estudante ${this.name} está estudando. Silêncio, por favor.`)
    }

}

const person1 = new Person("talu", 26, "email@email.com", 123456);
person1.speak();

const user1 = new User("talu", 26, "email@email.com", 123456);
user1.speak();
console.log(user1);

const student1 = new Student("talu", 26, "email@email.com");
student1.speak();
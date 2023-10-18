class Person{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name} está falando.`)
    }
}
    class User extends Person {
        email;
        password;

        constructor(name, age, email, password){
            super(name, age); /* aqui, estou herdando os atributos da superclasse, e implementando novos atributos, email e senha */
            this.email = email;
            this.password = password;
        }
    }

    const user1 = new User("talu", 26, "email@email.com", 123456);
    user1.speak();//criação do usuario, herdando o console.log de Person. 
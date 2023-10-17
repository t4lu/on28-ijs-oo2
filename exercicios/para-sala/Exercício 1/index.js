class InvoiceItem {
    #id;
    #description;
    #quantity;
    #unitPrice;

    constructor(id, description, quantity, unityPrice) {
        this.#id = id;
        this.#description = description;
        this.#quantity = quantity;
        this.#unitPrice = unityPrice;
    }

    get id() {
        return this.#id;
    }

    get description() {
        return this.#description;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(newQuantity) {
        this.#quantity = newQuantity;
    }

    get unitPrice() {
        return this.#unitPrice;
    }
    
    set unitPrice(newUnitPrice){
        return this.#unitPrice = newUnitPrice;
    }

    get total() {
        return this.#unitPrice * this.quantity;

    }

    toString() {
        console.log(`
        id: ${this.#id}, descrição: ${this.#description}, quantidade: ${this.#quantity},
        valor unitário: R$${this.#unitPrice}, valor total: R$${this.total}`);
    }
}

const carrinho1 = new InvoiceItem("546239656", "computador", 10, 1999.99)
console.log(carrinho1);
console.log(carrinho1.id);
console.log(carrinho1.description);
console.log(carrinho1.total);
carrinho1.toString();
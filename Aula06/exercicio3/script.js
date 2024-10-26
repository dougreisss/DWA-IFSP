function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

function Bike(company, model, year, owner) {
    this.company = company;
    this.model = model;
    this.year = year;
    this.owner = owner;  
}

const person1 = new Person("Douglas", 21, "São Paulo");

const bike1 = new Bike("Yamaha", "YZF-R3", 2020, person1);

document.write(`Proprietário: ${bike1.owner.name}<br>`);
document.write(`Idade: ${bike1.owner.age}<br>`);
document.write(`Cidade: ${bike1.owner.city}<br>`);
document.write(`Empresa: ${bike1.company}<br>`);
document.write(`Modelo: ${bike1.model}<br>`);
document.write(`Ano: ${bike1.year}`);

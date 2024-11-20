const person = {
    nome: 'Kayo Amado',
    idade: 30,
    local: 'São vicente, Brasil'
};

const { nome, idade, local } = person;

console.log(`Eu sou ${nome}, idade: ${idade} e eu sou prefeito de ${local}`);   

let sum = (a, b, c, ...numbers) => {
    let total = a + b + c;
    for (let number of numbers) {
        total += number;
    }
    return total;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));


const dominios = [
    'Facebook',
    'Instagram',
    'Hotmail',
    'YouTube'
];

const caracteres = dominios.map(dominio => dominio.length);

console.log(caracteres); 

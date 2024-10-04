const resultDiv = document.getElementById('resultado');
const numeros = [];
const quantidade = 5;

for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número entre 1 e 30:`));

    while (isNaN(numero) || numero < 1 || numero > 30) {
        numero = parseInt(prompt(`Número inválido. Digite o ${i + 1}º número entre 1 e 30:`));
    }

    numeros.push(numero);
}

numeros.forEach(num => {
    resultDiv.innerHTML += '*'.repeat(num) + '<br>';
});
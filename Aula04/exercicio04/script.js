let diamante = document.getElementById('resultado');
const altura = 5; 
let resultado = '';

for (let i = 0; i < altura; i++) {
    resultado += ' '.repeat(altura - i - 1) + '*'.repeat(2 * i + 1) + '\n';
}

for (let i = altura - 2; i >= 0; i--) {
    resultado += ' '.repeat(altura - i - 1) + '*'.repeat(2 * i + 1) + '\n';
}

diamante.textContent = resultado;
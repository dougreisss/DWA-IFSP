const resultado = document.getElementById('result');
const limite = 35184372088832; 
let numero = 2;

while (numero <= limite) {
    resultado.innerHTML += `${numero}<br>`;
    numero *= 2; 
}

if (numero / 2 < limite) {
    resultado.innerHTML += `${limite}<br>`;
}

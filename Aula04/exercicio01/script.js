let maior = -1; 
let numero = 0;    

for (let contador = 0; contador < 10; contador++) { 
    numero = prompt("Digite um número de 0 a 9:");
    numero = parseInt(numero); 

    if (numero > maior) {
        maior = numero;
    }
    
}

alert("O maior número digitado foi: " + maior);

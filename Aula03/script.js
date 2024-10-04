function processar() {

    let numeroDigitado = parseFloat(document.getElementById("numero").value);
    let textoDigitado = document.getElementById("texto").value;

    if (isNaN(numeroDigitado)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
        return;
    }

    let numeroComDuasDecimais = numeroDigitado.toFixed(2);

    let arredondado = Math.round(numeroDigitado * 2) / 2;

    let raizQuadrada = Math.sqrt(numeroDigitado);

    let numeroRandom = Math.random() * numeroDigitado;

    let comprimentoTexto = textoDigitado.length;

    let textoMaiusculo = textoDigitado.toUpperCase();

    let contemJava = textoDigitado.toLowerCase().includes("java") ? "sim" : "não";

    let textoSubstituido = textoDigitado.length >= 2
        ? textoDigitado.slice(0, 1) + "mamão" + textoDigitado.slice(2)
        : textoDigitado;

    document.getElementById("resultado").innerHTML = `
        <strong>Número inserido:</strong> ${numeroComDuasDecimais} <br>
        <strong>Arredondado em 0.5:</strong> ${arredondado} <br>
        <strong>Raiz quadrada:</strong> ${raizQuadrada.toFixed(2)} <br>
        <strong>Randômico multiplicado pelo número:</strong> ${numeroRandom.toFixed(2)} <br><br>
        
        <strong>Texto inserido:</strong> ${textoDigitado} <br>
        <strong>Comprimento do texto:</strong> ${comprimentoTexto} caracteres <br>
        <strong>Texto em maiúsculo:</strong> ${textoMaiusculo} <br>
        <strong>Contém "java"?:</strong> ${contemJava} <br>
        <strong>Texto com segundo caractere substituído:</strong> ${textoSubstituido}
    `;

    let quantidade = 9;
    let precoUnitario = 8.99;
    let produto = 'Leite';
    let total = quantidade * precoUnitario;

    let resultado = `${quantidade} itens de ${produto} custam R$ ${total.toFixed(2)}`;

    console.log(resultado); 
}

const display = document.getElementById("display");

function adicionarNumero(numero) {
    display.value += numero;
}

function adicionarSinal(sinal) {
    display.value += sinal;
}

function calcular() {
        display.value = eval(display.value);
}

function limpar() {
    display.value = "";
}


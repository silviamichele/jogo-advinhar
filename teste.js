var numero_sorteado;
var array_numeros = Array();

function sortearNumero() {
    numero_sorteado = parseInt(Math.random() * 100);
}
sortearNumero();

function enviar() {
    let numero_digitado = document.getElementById("input").value;
    array_numeros.push(numero_digitado);
    if (numero_digitado == numero_sorteado) {
        array_numeros = Array();
        document.getElementById("status").innerHTML = "acertou";
        document.getElementById("paragrafo").innerHTML = "";
    } else {
        document.getElementById("paragrafo").innerHTML = "Números digitados: " + array_numeros.join(", ");
        if (numero_digitado > numero_sorteado) {
            document.getElementById("status").innerHTML = "maior";
        } else {
            document.getElementById("status").innerHTML = "menor";
        }
    }
    document.getElementById("input").value = "";
}
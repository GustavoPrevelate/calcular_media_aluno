// app.js
function calcularMedia() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = nome + ", sua média é: " + media.toFixed(2);

    if (media < 5) {
        resultadoElement.style.color = "red";
        resultadoElement.innerText += " - Reprovado";
    } else if (media >= 5 && media < 7) {
        resultadoElement.style.color = "yellow";
        resultadoElement.innerText += " - Em Recuperação";
    } else {
        resultadoElement.style.color = "green";
        resultadoElement.innerText += " - Aprovado";
    }
}

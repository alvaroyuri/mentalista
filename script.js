/*Nessa aula foi executado o laco de repeticao if de forma aninhada e encadeada, assim como reforcado a interacao entre javascript e html pelo metodo document.getElementById*/

var chute = parseInt(Math.random() * 11);
var trying = 0;

function Chutar() {
  var input = parseInt(document.getElementById("valor").value);

  if (trying < 3) {
    trying++;

    if (input == chute) {
      document.getElementById("resultado").innerHTML =
        "Parabéns, você acertou, o número gerado foi: " + chute;
    } else if (input > 10 || input < 0) {
      document.getElementById("resultado").innerHTML =
        "Por gentileza, digite um número entre 0 e 10, restam " +
        (3 - trying) +
        " tentativas";
    } else if (input > chute) {
      document.getElementById("resultado").innerHTML =
        "Numero errado. Dica: Menor, restam " + (3 - trying) + " tentativas";
    } else if (input < chute) {
      document.getElementById("resultado").innerHTML =
        "Numero errado. Dica: Maior, restam " + (3 - trying) + " tentativas";
    }
  } else
    document.getElementById("resultado").innerHTML = "Suas tentativas acabaram";
}
function soma(n1, n2, operacao) {
    let som = (n1 + n2)
    document.getElementById("resultado").innerText = som;
}
function subtracao(n1, n2, operacao) {
    let sub = (n1 - n2)
    document.getElementById("resultado").innerText = sub;
}
function divisao(n1, n2, operacao) {
    let div = (n1 / n2)
    document.getElementById("resultado").innerText = div;
}
function multiplicacao(n1, n2, operacao) {
    let mult = (n1 * n2)
    document.getElementById("resultado").innerText = mult;
}
function calculadora() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let operacao = document.getElementById("op").value;
    switch (operacao) {
        case "+":
            soma(n1, n2)
            break
        case "-":
            subtracao(n1, n2)
            break
        case "/":
            divisao(n1, n2)
            break
        case "*":
            multiplicacao(n1, n2)
            break
        default:
            document.getElementById("resultado").innerText = "Não é possível fazer está operação !";
    }
}




//n1 + "" + operacao + "" + n2 + "=" +


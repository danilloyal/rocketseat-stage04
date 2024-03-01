alert("Você deverá inserir dois números válidos para que sejam realizadas algumas operações matemáticas")

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

let sum = n1 + n2;
let min = n1 - n2;
let mult = n1 * n2;
let rest = n1 % n2;

alert("A soma dos dois números é: " + sum);
alert("A subtração dos dois números é: " + min);
alert("A multiplicação dos dois números é: " + mult);
if(n2 === 0){
    alert("Impossível dividir por zero")
}else{
    let div = n1 / n2;
    alert("A divisão dos dois números é: " + div);
}
alert("A sobra da divisão dos dois números é: " + rest);
if(sum%2 != 0){
    alert(`A soma dos números é igual a ${sum}, um número impar`)
}else{
    alert(`A soma dos números é igual a ${sum}, um número par`)
}
if(n1 == n2){
    alert("Os números inseridos são iguais")
}else{
    alert("Os números inseridos são diferentes")
}
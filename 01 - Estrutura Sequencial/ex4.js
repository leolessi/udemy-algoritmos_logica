const prompt = require("prompt-sync")();

const valorX = parseInt(prompt("Digite o valor de X: "));
const valorY = parseInt(prompt("Digite o valor de Y: "));

// const soma = valorX + valorY;
// console.log("Soma = " + soma);

function soma(valorX, valorY) {
    const soma = valorX + valorY;
    console.log(`Soma = ${soma}`)
}
soma(valorX, valorY);
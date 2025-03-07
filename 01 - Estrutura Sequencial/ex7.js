const prompt = require('prompt-sync')();

const ladoA = parseFloat(prompt("Digite a medida A: "));
const ladoB = parseFloat(prompt("Digite a medida B: "));
const ladoC = parseFloat(prompt("Digite a medida C: "));

function calculoQuadrado(ladoA) {
    return Math.pow(ladoA, 2);
}

function calculoTriangulo(ladoA, ladoB) {
    return (ladoA * ladoB) / 2;
}

function calculoTrapezio(ladoA, ladoB, ladoC) {
    return (ladoA + ladoB) * ladoC / 2;
}

console.log(`Área do quadrado: ${calculoQuadrado(ladoA).toFixed(4)}`);
console.log(`Área do triângulo: ${calculoTriangulo(ladoA, ladoB).toFixed(4)}`);
console.log(`Área do trapézio: ${calculoTrapezio(ladoA, ladoB, ladoC).toFixed(4)}`);


// const prompt = require('prompt-sync')();

// const ladoA = parseFloat(prompt("Digite a medida A: "));
// const ladoB = parseFloat(prompt("Digite a medida B: "));
// const ladoC = parseFloat(prompt("Digite a medida C: "));

// function calculoQuadrado(ladoA) {
//     const areaQuadrado = Math.pow(ladoA, 2);
//     console.log("Area do quadrado = " + areaQuadrado);
// }

// function calculoTriangulo(ladoA, ladoB) {
//     const areaTriangulo = (ladoA * ladoB) / 2;
//     console.log("Area do triangulo = " + areaTriangulo);
// }

// function calculoTrapezio(ladoA, ladoB, ladoC) {
//     const areaTrapezio = (ladoA + ladoB) * ladoC / 2;
//     console.log("Area do trapezio = " + areaTrapezio);
// }

// function calculos(calculoQuadrado, calculoTriangulo, calculoTrapezio) {
//     calculoQuadrado();
//     calculoTriangulo();
//     calculoTrapezio();
// }
// calculos(calculoQuadrado, calculoTriangulo, calculoTrapezio);
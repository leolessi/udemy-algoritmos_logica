const prompt = require('prompt-sync')();

const ladoA = parseFloat(prompt("Digite a medida A: "));
const ladoB = parseFloat(prompt("Digite a medida B: "));
const ladoC = parseFloat(prompt("Digite a medida C: "));

function calculoQuadrado(lado) {
    const areaQuadrado = Math.pow(lado, 2);
    return areaQuadrado;
}

function calculoTriangulo(base, altura) {
    const areaTriangulo = (base * altura) / 2;
    return areaTriangulo;
}

function calculoTrapezio(baseMenor, baseMaior, altura) {
    const areaTrapezio = (baseMenor + baseMaior) * altura / 2;
    return areaTrapezio;
}

// Função que chama todas as outras e exibe os resultados
function calcularAreas(ladoA, ladoB, ladoC) {
    const areaQuadrado = calculoQuadrado(ladoA);
    const areaTriangulo = calculoTriangulo(ladoA, ladoB);
    const areaTrapezio = calculoTrapezio(ladoA, ladoB, ladoC);

    console.log(`Área do quadrado: ${areaQuadrado.toFixed(4)}`);
    console.log(`Área do triângulo: ${areaTriangulo.toFixed(4)}`);
    console.log(`Área do trapézio: ${areaTrapezio.toFixed(4)}`);
}

// Chamando a função principal
calcularAreas(ladoA, ladoB, ladoC);






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
const prompt = require("prompt-sync")();

const baseRetangulo = parseFloat(prompt("Base do retangulo: "));
const alturaRetangulo = parseFloat(prompt("Altura do retangulo: "));

function calculos(baseRetangulo, alturaRetangulo) {
    const area = baseRetangulo * alturaRetangulo;
    const perimetro = (baseRetangulo * 2) + (alturaRetangulo * 2);
    const diagonal = (Math.sqrt(Math.pow(baseRetangulo, 2) + Math.pow(alturaRetangulo, 2)));
    console.log(`Area = ${area.toFixed(4)}\nPerimetro = ${perimetro.toFixed(4)}\nDiagonal = ${diagonal.toFixed(4)}`)
}
calculos(baseRetangulo, alturaRetangulo);
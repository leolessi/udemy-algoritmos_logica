const prompt = require("prompt-sync")();

const baseRetangulo = parseFloat(prompt("Base do retangulo: "));
const alturaRetangulo = parseFloat(prompt("Altura do retangulo: "));

function calculos(baseRetangulo, alturaRetangulo) {
    const area = baseRetangulo * alturaRetangulo;
    const perimetro = (baseRetangulo * 2) + (alturaRetangulo * 2);
    const diagonal = (Math.sqrt(Math.pow(baseRetangulo, 2) + Math.pow(alturaRetangulo, 2)));
    console.log(`Area = ${area}\nPerimetro = ${perimetro}\nDiagonal = ${diagonal}`)
}
calculos(baseRetangulo, alturaRetangulo);
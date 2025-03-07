const prompt = require("prompt-sync")();

const nome1 = prompt("Nome da primeira pessoa: ");
const idade1 = parseFloat(prompt("Idade da primeira pessoa: "));
const nome2 = prompt("Nome da segunda pessoa: ");
const idade2 = parseFloat(prompt("Idade da segunda pessoa: "));

const media = (idade1 + idade2) / 2;
console.log(`A idade média de ${nome1} e ${nome2} é de ${media.toFixed(1)}`);

// function idadeMedia(nome1, nome2, idade1, idade2) {
//     const media = (idade1 + idade2) / 2;
//     console.log(`A idade média de ${nome1} e ${nome2} é de ${media.toFixed(1)}`);
// }
// idadeMedia(nome1, nome2, idade1, idade2);
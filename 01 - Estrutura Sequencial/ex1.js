const largura = parseFloat(prompt("Largura = "));
const comprimento = parseFloat(prompt("Comprimento = "));
const valorMetro = parseFloat(prompt("Valor do metro quadrado = "));

const calcularTerreno = (largura, comprimento, valorMetro) => {
    const area = largura * comprimento;
    const preco = valorMetro * area;
    console.log(`Área do terreno = ${area}`);
    console.log(`Preço do terreno = ${preco}`);
};

calcularTerreno(largura, comprimento, valorMetro);
const prompt = require('prompt-sync')();

const precoProduto = parseFloat(prompt("Preço unitário do produto: "));
const qtdProdutos = parseFloat(prompt("Quantidade comprada: "));
const recebido = parseFloat(prompt("Dinheiro recebido: "));

function calculoTroco(precoProduto, qtdProdutos, recebido) {
    const totalGasto = precoProduto * qtdProdutos;
    if (totalGasto < recebido) {
        const troco = recebido - totalGasto;
        console.log(`Troco = ${troco.toFixed(2)}`);
    } else {
        console.log("Dinheiro insuficiente para compra!");
    }
}
calculoTroco(precoProduto, qtdProdutos, recebido);
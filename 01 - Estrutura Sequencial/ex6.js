const prompt = require('prompt-sync')();

var tempo = parseInt(prompt("Duracao em segundos: "));

function calcularTempo(tempo) {
    const horas = Math.floor(tempo / 3600);
    const minutos = Math.floor((tempo % 3600) / 60);
    const segundos = tempo % 60;
    console.log(`${horas}:${minutos}:${segundos}`);
}

calcularTempo(tempo);
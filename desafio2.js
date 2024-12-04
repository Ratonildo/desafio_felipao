// Primeira forma que encontrei para resolver o desafio

// Função para calcular o saldo de partidas e determinar o nível
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Variável para armazenar o nível
    let nivel;

    // Estrutura de decisão para determinar o nível com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna o saldo e o nível
    return { saldoVitorias, nivel };
}

// Entrada de dados (quantidade de vitórias e derrotas)
let vitorias = 45; // Substitua pelo valor desejado
let derrotas = 15; // Substitua pelo valor desejado

// Chama a função e armazena o resultado
let resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem final
console.log(
    `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
);


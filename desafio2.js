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

/*
// Segunda maneira que encontrei para resolver o desafio

// Função para determinar o nível
function determinarNivel(vitorias) {
    if (vitorias < 10) return "Ferro";
    if (vitorias <= 20) return "Bronze";
    if (vitorias <= 50) return "Prata";
    if (vitorias <= 80) return "Ouro";
    if (vitorias <= 90) return "Diamante";
    if (vitorias <= 100) return "Lendário";
    return "Imortal";
}

// Função principal para calcular o saldo e exibir o resultado
function calcularSaldo(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    const nivel = determinarNivel(vitorias);

    console.log(
        `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    );
}

// Entrada de dados
let vitorias = 72; // Substitua pelo valor desejado
let derrotas = 20; // Substitua pelo valor desejado

// Chamada da função
calcularSaldo(vitorias, derrotas);


// Terceira maneira que encontrei para resolver o desafio
// Função principal
function calcularNivel(vitorias, derrotas) {
    // Define as faixas de vitórias e níveis
    const niveis = [
        { limite: 10, nivel: "Ferro" },
        { limite: 20, nivel: "Bronze" },
        { limite: 50, nivel: "Prata" },
        { limite: 80, nivel: "Ouro" },
        { limite: 90, nivel: "Diamante" },
        { limite: 100, nivel: "Lendário" },
        { limite: Infinity, nivel: "Imortal" }
    ];

    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Determina o nível percorrendo o array
    let nivel = niveis.find((faixa) => vitorias <= faixa.limite).nivel;

    // Exibe o resultado
    console.log(
        `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    );
}

// Entrada de dados
let vitorias = 101; // Substitua pelo valor desejado
let derrotas = 25;  // Substitua pelo valor desejado

// Chamada da função
calcularNivel(vitorias, derrotas);
*/
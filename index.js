// Variáveis para armazenar o nome, a experiência e o nível do herói
let nome = "Arthur"; // Nome do herói
let xp = 7500;       // Valor da experiência
let nivel;           // Nível do herói

// Estrutura de decisão para determinar o nível
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída da mensagem
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

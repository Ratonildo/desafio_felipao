// Definição da classe Heroi
class Heroi {
    // Construtor que inicializa as propriedades do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;   // Nome do herói
      this.idade = idade; // Idade do herói
      this.tipo = tipo;   // Tipo do herói (guerreiro, mago, monge, ninja)
    }
  
    // Método atacar que exibe a mensagem baseada no tipo do herói
    atacar() {
      let ataque;
  
      // Verifica o tipo do herói e define o ataque correspondente
      switch (this.tipo) {
        case 'mago':
          ataque = "usou magia";
          break;
        case 'guerreiro':
          ataque = "usou espada";
          break;
        case 'monge':
          ataque = "usou artes marciais";
          break;
        case 'ninja':
          ataque = "usou shuriken";
          break;
        default:
          ataque = "realizou um ataque indefinido"; // Caso o tipo não seja reconhecido
      }
  
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso:
  
  // Criação de objetos da classe Heroi
  const heroi1 = new Heroi("Arthur", 25, "guerreiro");
  const heroi2 = new Heroi("Merlin", 30, "mago");
  const heroi3 = new Heroi("Lian", 22, "monge");
  const heroi4 = new Heroi("Shadow", 28, "ninja");
  
  // Chamando o método atacar para cada herói
  heroi1.atacar(); // O guerreiro atacou usando espada
  heroi2.atacar(); // O mago atacou usando magia
  heroi3.atacar(); // O monge atacou usando artes marciais
  heroi4.atacar(); // O ninja atacou usando shuriken
  
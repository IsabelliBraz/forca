const palavras = [
  "abacaxi",
  "banana",
  "caju",
  "damasco",
  "uva",
  "laranja",
  "manga",
  "morango",
  "pera",
  "ameixa",
  "tomate",
  "cenoura",
  "batata",
  "alface",
  "espinafre",
  "abobora",
  "pepino",
  "beterraba",
  "alho",
  "cebola",
  "arroz",
  "feijao",
  "macarrao",
  "lasanha",
  "pizza",
  "hamburguer",
  "sushi",
  "taco",
  "churrasco",
  "risoto",
  "Brasil",
  "Portugal",
  "Franca",
  "Alemanha",
  "Argentina",
  "Chile",
  "Japao",
  "China",
  "Canada",
  "Australia",
  "Rio de Janeiro",
  "Sao Paulo",
  "Paris",
  "Londres",
  "Nova York",
  "Toquio",
  "Sydney",
  "Berlim",
  "Moscou",
  "Buenos Aires",
  "azul",
  "vermelho",
  "verde",
  "amarelo",
  "preto",
  "branco",
  "cinza",
  "rosa",
  "roxo",
  "marrom",
  "cadeira",
  "mesa",
  "sofa",
  "armario",
  "geladeira",
  "fogao",
  "microondas",
  "computador",
  "telefone",
  "televisao",
  "carro",
  "bicicleta",
  "moto",
  "aviao",
  "barco",
  "trem",
  "onibus",
  "patinete",
  "navio",
  "helicoptero",
  "cachorro",
  "gato",
  "elefante",
  "leao",
  "tigre",
  "girafa",
  "cavalo",
  "macaco",
  "passaro",
  "peixe",
  "caneta",
  "lapis",
  "borracha",
  "caderno",
  "livro",
  "regua",
  "estojo",
  "mochila",
  "tesoura",
  "grampeador",
  "sol",
  "lua",
  "estrela",
  "nuvem",
  "chuva",
  "vento",
  "neve",
  "relampago",
  "trovao",
  "tempestade",
  "futebol",
  "basquete",
  "volei",
  "tenis",
  "natacao",
  "corrida",
  "skate",
  "surfe",
  "ciclismo",
  "boxe",
  "agua",
  "suco",
  "refrigerante",
  "cafe",
  "cha",
  "leite",
  "vinho",
  "cerveja",
  "vodka",
  "whisky",
  "chave",
  "fechadura",
  "porta",
  "janela",
  "parede",
  "teto",
  "piso",
  "escada",
  "corrimao",
  "elevador",
  "relogio",
  "pulseira",
  "anel",
  "brinco",
  "colar",
  "oculos",
  "chapeu",
  "bone",
  "lenco",
  "luva",
  "camisa",
  "calca",
  "saia",
  "blusa",
  "casaco",
  "meia",
  "sapato",
  "tenis",
  "sandalia",
  "bota",
  "dentista",
  "medico",
  "engenheiro",
  "advogado",
  "professor",
  "policial",
  "bombeiro",
  "cozinheiro",
  "pintor",
  "mecanico",
  "peixe",
  "carne",
  "frango",
  "porco",
  "bacon",
  "salsicha",
  "presunto",
  "queijo",
  "manteiga",
  "iogurte",
  "sabonete",
  "shampoo",
  "condicionador",
  "pasta de dente",
  "escova de dentes",
  "desodorante",
  "perfume",
  "creme",
  "lamina",
  "toalha",
  "celular",
  "tablet",
  "notebook",
  "impressora",
  "scanner",
  "projetor",
  "mouse",
  "teclado",
  "monitor",
  "pendrive",
  "camiseta",
  "calcao",
  "blusao",
  "bermuda",
  "agasalho",
  "roupa de banho",
  "terno",
  "gravata",
  "cinto",
  "jaqueta",
  "abajur",
  "ventilador",
  "ar-condicionado",
  "luminaria",
  "quadro",
  "cortina",
  "tapete",
  "espelho",
  "vaso",
  "escultura",
  "parque",
  "praia",
  "montanha",
  "deserto",
  "floresta",
  "campo",
  "lago",
  "cachoeira",
  "rio",
  "vulcao",
  "violao",
  "guitarra",
  "piano",
  "bateria",
  "violino",
  "flauta",
  "saxofone",
  "trompete",
  "tambor",
  "harpa",
  "joelho",
  "cotovelo",
  "cabeca",
  "ombro",
  "perna",
  "braco",
  "mao",
  "pe",
  "olho",
  "orelha",
  "tigre",
  "urso",
  "coelho",
  "panda",
  "canguru",
  "dromedario",
  "foca",
  "golfinho",
  "tartaruga",
  "jacare",
  "amigo",
  "parente",
  "vizinho",
  "colega",
  "patrao",
  "empregado",
  "socio",
  "cliente",
  "parceiro",
  "fornecedor",
  "pessoa",
  "gente",
  "homem",
  "mulher",
  "crianca",
  "jovem",
  "idoso",
  "adulto",
  "adolescente",
  "bebe",
  "carteira",
  "bolsa",
  "mochila",
  "sacola",
  "mala",
  "caixa",
  "envelope",
  "pacote",
  "porta-moedas",
  "maleta",
  "pao",
  "bolo",
  "biscoito",
  "torrada",
  "croissant",
  "baguete",
  "pizza",
  "pastel",
  "coxinha",
  "empada",
  "aviao",
  "helicoptero",
  "planador",
  "balao",
  "dirigivel",
  "jato",
  "drone",
  "espaconave",
  "foguete",
  "satelite",
  "alicate",
  "martelo",
  "serrote",
  "chave inglesa",
  "parafuso",
  "prego",
  "porca",
  "arruela",
  "furadeira",
  "serra",
  "planeta",
  "galaxia",
  "estrela",
  "asteroide",
  "meteoro",
  "buraco negro",
  "supernova",
  "cometa",
  "satelite",
  "luz",
  "lapis",
  "grafite",
  "borracha",
  "regua",
  "compasso",
  "canetinha",
  "pincel",
  "tinta",
  "tesoura",
  "grampeador",
  "sala",
  "cozinha",
  "banheiro",
  "quarto",
  "jardim",
  "garagem",
  "varanda",
  "escritorio",
  "porao",
  "sotao",
  "televisao",
  "radio",
  "fone de ouvido",
  "controle remoto",
  "aparelho de som",
  "dvd",
  "blu-ray",
  "decodificador",
  "cabo",
  "antena",
  "andar",
  "correr",
  "pular",
  "nadar",
  "voar",
  "escalar",
  "patinar",
  "pedalar",
  "remar",
  "mergulhar",
  "janela",
  "vidro",
  "cortina",
  "persiana",
  "parapeito",
  "grade",
  "mosquiteiro",
  "toldo",
  "sacada",
  "guarda-sol",
  "livro",
  "revista",
  "jornal",
  "enciclopedia",
  "dicionario",
  "quadrinho",
  "album",
  "manual",
  "folheto",
  "cartaz",
  "roupa",
  "sapato",
  "relogio",
  "joia",
  "bijuteria",
  "perfume",
  "batom",
  "creme",
  "xampu",
  "pente",
  "sol",
  "lua",
  "estrela",
  "galaxia",
  "cometa",
  "planeta",
  "satelite",
  "asteroide",
  "meteoro",
  "buraco negro",
  "amarelo",
  "azul",
  "vermelho",
  "verde",
  "roxo",
  "laranja",
  "rosa",
  "preto",
  "branco",
  "cinza",
  "hamburguer",
  "pizza",
  "sanduiche",
  "batata frita",
  "lasanha",
  "macarrao",
  "churrasco",
  "risoto",
  "sushi",
  "taco",
  "Brasil",
  "Argentina",
  "Chile",
  "Uruguai",
  "Paraguai",
  "Colombia",
  "Peru",
  "Venezuela",
  "Bolivia",
  "Equador",
  "carro",
  "bicicleta",
  "moto",
  "onibus",
  "trem",
  "navio",
  "aviao",
  "helicoptero",
  "metro",
  "bonde",
];

function sortearPalavra() {
  const index = Math.floor(Math.random() * palavras.length);
  return palavras[index];
}

const jsConfetti = new JSConfetti();
let palavra = sortearPalavra();
const alfabeto = document.querySelector("#alfabeto");
const partes = [
  "",
  "forca",
  "corda",
  "no",
  "cabeca",
  "corpo",
  "braco-esquerdo",
  "braco-direito",
  "perna-esquerda",
  "perna-direita",
];
let palpites = [];
let erros = 0;

function reiniciar() {
  erros = 0;
  palpites = [];
  document
    .querySelectorAll("path")
    .forEach((tag) => (tag.style.display = "none"));
  document
    .querySelectorAll(".palpitada")
    .forEach((div) => div.classList.remove("palpitada"));

  document.querySelector("#word").innerHTML = "";
  palavra = sortearPalavra();
  gerarTracinhos();
}

function mostrarPartes() {
  if (erros > partes.length - 1) {
    alert("Você perdeu!");
    reiniciar();
  } else {
    for (let i = 0; i <= erros; i++) {
      const className = partes[i];
      if (className !== "") {
        const procurando = document.querySelectorAll(`.${className}`);
        procurando.forEach((parte) => {
          parte.style.display = "inline";
        });
      }
    }
  }
}

function procurarLetra(letra) {
  let acertou = false;

  for (let i = 0; i < palavra.length; i++) {
    if (letra === palavra[i].toUpperCase()) {
      acertou = true;
      document.querySelectorAll(".letter")[i].innerHTML = letra;
    }
  }
  if (!acertou) {
    erros++;
  }
  mostrarPartes();
  jaGanhou();
}

function jaGanhou() {
  let ganhou = true;

  document.querySelectorAll(".letter").forEach((letra) => {
    if (letra.innerHTML === "") {
      ganhou = false;
    }
  });

  if (ganhou) {
    jsConfetti.addConfetti();
    setTimeout(() => {
      alert("Você ganhou!");
      reiniciar();
    }, 2000);
  }
}

for (let i = 65; i <= 90; i++) {
  let letra = String.fromCharCode(i);
  alfabeto.innerHTML += `<div>${letra}</div>`;
}

document.querySelectorAll("#alfabeto div").forEach((letra) =>
  letra.addEventListener("click", (event) => {
    const div = event.target;
    const l = div.innerHTML;
    div.classList.add("palpitada");
    if (!palpites.includes(1)) {
      palpites.push(l);
      procurarLetra(l);
    }
  })
);

function gerarTracinhos() {
  for (let i = 0; i < palavra.length; i++) {
    document.querySelector("#word").innerHTML += `<div class="letter"></div>`;
  }
}

gerarTracinhos();

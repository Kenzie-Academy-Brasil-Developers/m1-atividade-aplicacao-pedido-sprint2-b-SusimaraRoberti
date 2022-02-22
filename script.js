let cardapio = [
  {
    id: 0,
    nome: "X-Burger",
    preco: 25,
    peso: "330g",
  },
  {
    id: 1,
    nome: "Pizza",
    preco: 58,
    peso: "130g",
  },
  {
    id: 2,
    nome: "Sushi",
    preco: 48,
    peso: "500g",
  },
  {
    id: 3,
    nome: "Esfirra",
    preco: 8,
    peso: "85g",
  },
  {
    id: 4,
    nome: "Lasanha",
    preco: 22,
    peso: "1100g",
  },
  {
    id: 5,
    nome: "Refrigerante",
    preco: 10,
    peso: "2000ml",
  },
  {
    id: 6,
    nome: "Suco de Uva",
    preco: 5,
    peso: "600ml",
  },
  {
    id: 7,
    nome: "Suco de Abacaxi",
    preco: 5,
    peso: "600ml",
  },
];

// Pedido de um cliente que montaremos conforme id dos itens
let pedido = {
  nomes: [],
  precoTotal: 0,
  pesos: {
    gramas: 0,
    mililitros: 0,
  },
};

// Função será responsável por atualizar a variável nomes
function definirNome(minhaListaDeProdutos) {
  for (let i = 0; i < minhaListaDeProdutos.length; i++) {
    pedido.nomes.push(minhaListaDeProdutos[i].nome);
  }
}

// Função será responsável por atualizar a variável precoTotal
function definirPrecoTotal(minhaListaDeProdutos) {
  for (let i = 0; i < minhaListaDeProdutos.length; i++) {
    pedido.precoTotal += minhaListaDeProdutos[i].preco;
  }
}

// Função será responsável por atualizar a variável pesos
function definirGramasEMililitros(produtos) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].peso.slice(-1) === "g") {
      pedido.pesos.gramas += parseInt(produtos[i].peso);
    } else {
      pedido.pesos.mililitros += parseInt(produtos[i].peso);
    }
  }
}

// Função será responsavel por atualizar a variavel minhaListaDeProdutos
function encontrarItensPeloId(idList) {
  //[1,3,7]
  let encontrados = [];
  for (let i = 0; i < idList.length; i++) {
    for (let j = 0; j < cardapio.length; j++) {
      if (idList[i] == cardapio[j].id) {
        encontrados.push(cardapio[j]);
      }
    }
  }
  return encontrados;
}

// Função será responsável pela apresentação do pedido. Obs: usar console.log() invés return na string criada.
function apresentacao() {
  console.log(pedido);
}

// Função principal da nossa aplicação, será responsável por chamar as funções.
function principal(idDosProdutosComprados) {
  // objetos que serão filtrados conforme o id dos itens. Obs: esse sera nosso array de objetos.
  const minhaListaDeProdutos = encontrarItensPeloId(idDosProdutosComprados);

  // atualizar nomes
  definirNome(minhaListaDeProdutos);

  // atualiar pesos
  definirGramasEMililitros(minhaListaDeProdutos);

  // atualizar precoTotal
  definirPrecoTotal(minhaListaDeProdutos);

  // apresentação do pedido
  apresentacao();
}

principal([2, 3, 4, 6, 7]);

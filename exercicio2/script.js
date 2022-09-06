//Escreva um código que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.
let idade = Number(prompt("Qual é sua idade?"));

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
if (idade >= 18) {
  console.log("Ja atingiu maioridade!");
  let ensinoMedio = confirm("Você terminou ensino médio?");
  if (ensinoMedio) {
    console.log("Ja terminou o ensino medio!");
    let cursandoFaculdade = confirm("Você esta cursando faculdade?");
    if (cursandoFaculdade) {
      console.log("Esta cursando faculdade!");
    } else {
      console.log("Não esta cursando faculdade!");
    }
  } else {
    console.log("Não terminou o ensino medio!!");
  }
} else {
  console.log("Não atingiu maioridade!");
}

// - Se a pessoa terminou o ensino médio;

// - Se a pessoa NÃO está cursando alguma faculdade;

//Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

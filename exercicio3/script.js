// Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.
const nacionalidade = prompt("Escreva aqui sua nacionalidade.").toLowerCase();

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

if (nacionalidade === "brasileira") {
  console.log("Brasileira");
} else if (nacionalidade === "argentina") {
  console.log("Argentina");
} else if (nacionalidade === "uruguaia") {
  console.log("Uruguaia");
} else if (nacionalidade === "chilena") {
  console.log("Chilena");
} else if (nacionalidade === "colombiana") {
  console.log("Colombiana");
} else {
  console.log(`nacionalidade ${nacionalidade} não encontrada`);
}

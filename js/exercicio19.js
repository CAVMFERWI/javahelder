// 19. Escopo de bloco com let
(function () {
  let idade = 18;

  if (true) {
    let idade = 25;
    console.log("Idade dentro do bloco:", idade);
  }

  console.log("Idade fora do bloco:", idade);
})();

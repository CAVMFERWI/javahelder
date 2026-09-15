// 12. Diferença entre let e var
(function () {
  let numero = 10;

  if (true) {
    let numero = 25;
    console.log("Dentro do bloco:", numero);
  }

  console.log("Fora do bloco:", numero);
})();

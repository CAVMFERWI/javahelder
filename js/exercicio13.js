// 13. Alterando objetos com const
(function () {
  const pessoa = { nome: "Ana", idade: 22 };
  pessoa.idade = 23;
  console.log(pessoa);
})();

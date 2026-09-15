// 11. Usando var
(function () {
  function testarVar() {
    if (true) {
      var numero = 42;
    }
    console.log(numero); // var "vaza" do bloco if, continua existindo fora dele
  }

  testarVar();
})();

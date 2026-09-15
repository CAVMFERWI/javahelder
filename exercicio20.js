// 20. Condição com &&, || e ! juntos
(function () {
  let usuario = "Maria";
  let senha = "abcd";
  let bloqueado = true;

  if ((usuario === "Maria" && senha === "abcd" || usuario === "admin") && !bloqueado) {
    console.log("Acesso liberado");
  } else {
    console.log("Acesso negado");
  }
})();

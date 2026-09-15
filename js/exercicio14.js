// 14. Operador && (E lógico)
(function () {
  let logado = true;
  let isAdmin = false;

  if (logado && isAdmin) {
    console.log("Bem-vindo, administrador!");
  } else {
    console.log("Acesso restrito.");
  }
})();

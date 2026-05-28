var senhaCorreta = "admin";
var formAdmin = document.getElementById("formAdmin");
var loginAdmin = document.getElementById("loginAdmin");
var areaCadastro = document.getElementById("areaCadastro");

formAdmin.addEventListener("submit", function (event) {
  event.preventDefault();

  var senhaDigitada = document.getElementById("senhaAdmin").value;

  if (senhaDigitada === senhaCorreta) {
    loginAdmin.classList.add("d-none");
    areaCadastro.classList.remove("d-none");
    return;
  }

  alert("Senha incorreta. Tente novamente.");
});

document.getElementById("formProduto").addEventListener("submit", function (event) {
  event.preventDefault();

  var produtosCadastrados = JSON.parse(localStorage.getItem("produtosCadastrados")) || [];

  var novoProduto = {
    id: Date.now(),
    nome: document.getElementById("nome").value,
    categoria: document.getElementById("categoria").value,
    descricao: document.getElementById("descricao").value,
    preco: Number(document.getElementById("preco").value),
    tamanho: document.getElementById("tamanho").value,
    cor: document.getElementById("cor").value,
    imagem: document.getElementById("imagem").value || "assets/img/camisa.png",
    estoque: Number(document.getElementById("quantidade").value)
  };

  produtosCadastrados.push(novoProduto);
  localStorage.setItem("produtosCadastrados", JSON.stringify(produtosCadastrados));

  alert("Produto cadastrado com sucesso!");
  document.getElementById("formProduto").reset();
});

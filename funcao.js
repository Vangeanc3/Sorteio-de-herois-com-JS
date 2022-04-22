const herois = [
   {nome: "hulk", idade:40, imagem: "img/hulk.png"},
   {nome: "viuvanegra", idade: 30, imagem: "img/viuvanegra.png"},
   {nome: "thor", idade: 30, imagem: "img/thor.png"},
   {nome: "ironman", idade: 30, imagem: "img/ironman.png"}
];

function sortear(){
    const numero = Math.floor(Math.random() * (5-1) + 1);
    return numero
}

function heroi(){
    let numero = sortear();
    let nome = document.getElementById("nome");
    let img = document.getElementById("img");
    nome.innerHTML = `${herois[numero - 1].nome}`;
    img.src = `${herois[numero - 1.].imagem}`
}

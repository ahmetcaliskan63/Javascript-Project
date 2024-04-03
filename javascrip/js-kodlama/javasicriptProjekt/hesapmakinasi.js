var arti = document.getElementById("btnarti");
var eksi = document.getElementById("btneksi");
var carpi = document.getElementById("btncarpi");
var bolu = document.getElementById("btnbolu");
var sayi1 = document.getElementById("sayi1");
var sayi2 = document.getElementById("sayi2");

arti.addEventListener("click", toplama);

function toplama() {
  document.getElementById("deger").innerHTML =
    Number(sayi1.value) + Number(sayi2.value);
}
eksi.addEventListener("click", cikartma);

function cikartma() {
  document.getElementById("deger").innerHTML =
    Number(sayi1.value) - Number(sayi2.value);
}
carpi.addEventListener("click", carpma);

function carpma() {
  document.getElementById("deger").innerHTML =
    Number(sayi1.value) * Number(sayi2.value);
}
bolu.addEventListener("click", bolme);

function bolme() {
  document.getElementById("deger").innerHTML =
    Number(sayi1.value) / Number(sayi2.value);
}

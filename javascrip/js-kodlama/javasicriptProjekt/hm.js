var sayi1 = document.getElementById("sayi1");
var sayi2 = document.getElementById("sayi2");
var formul = document.getElementById("sonucinput");

function topla() {
  var sonuc = Number(sayi1.value) + Number(sayi2.value);
  formul.innerHTML = sonuc;
}

function cikar() {
  var sonuc = Number(sayi1.value) - Number(sayi2.value);
  formul.innerHTML = sonuc;
}
function carp() {
  var sonuc = Number(sayi1.value) * Number(sayi2.value);
  formul.innerHTML = sonuc;
}
function bol() {
  var sonuc = Number(sayi1.value) / Number(sayi2.value);
  formul.innerHTML = sonuc;
}

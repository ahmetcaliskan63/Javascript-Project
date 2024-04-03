var kilo = document.getElementById("kilo");
var boy = document.querySelector("#boy");
var inputVki = document.getElementById("inputVki");
var hesaplaVki = document.getElementById("btnVki");
hesaplaVki.addEventListener("click", hesap);
var sonuc = document.getElementById("sonuc");

function hesap(e) {
  a = kilo.value;
  b = boy.value;

  var formul = a / ((b / 100) * (b / 100));

  inputVki.value = formul;

  if (formul < 18.5) {
    sonuc.value = "Çok zayıfsınız";
  }
  if (formul <= 18.5 && formul <= 25) {
    sonuc.value = "Sağlıklısınız";
  } else {
    sonuc.value = "Çok kilolusunuz";
  }

  e.preventDefault();
}

var reset = document.getElementById("reset");
reset.addEventListener("click", sil);

function sil(e) {
  kilo.value = "";
  boy.value = "";
  inputVki.value = "";
  sonuc.value = "";
  e.preventDefault();
}

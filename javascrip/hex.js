var sayi = document.getElementById("sayi");

      var islem = 0;

      var artır = document.getElementById("artir");
      var sifir = document.getElementById("sifir");
      var azalt = document.getElementById("azalt");

      artır.addEventListener("click", function () {
        islem++;
        sayi.textContent = islem;
      });

      sifir.addEventListener("click", () => {
        islem = 0;
        sayi.innerHTML = islem;
      });

      azalt.addEventListener("click", () => {
        islem--;
        sayi.innerHTML = islem;
      });

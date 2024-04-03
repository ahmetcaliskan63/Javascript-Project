const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];

let btn = document.getElementById("btn");
let color = document.getElementById("color");

btn.addEventListener("click", () => {
  let colorHex = "#";

  for (var i = 0; i < 6; i++) {
    colorHex += hex[getRandomeNumber()];
  }
  color.innerHTML = colorHex;

  document.body.style.backgroundColor = colorHex;
});

function getRandomeNumber() {
  return Math.floor(Math.random() * hex.length);
}

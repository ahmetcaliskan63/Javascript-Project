var reviews = [
  {
    id: "1",
    name: "Ahmet Çalışkan",
    job: "yazilim mühendisi",
    img: "indir (1).jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: "2",
    name: "mehmet Çalışkan",
    job: "matematik mühendisi",
    img: "indir.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: "3",
    name: "elif Çalışkan",
    job: "işaat mühendisi",
    img: "images (1).jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    id: "4",
    name: "salih Çalışkan",
    job: "minik mühendis",
    img: "images.jpeg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];

let img = document.getElementById("person-img");
let author = document.querySelector("#author");
let job = document.querySelector("#job");
let info = document.querySelector("#info");

let prevbtn = document.querySelector(".prev-btn");
let nextbtn = document.querySelector(".next-btn");
let randombtn = document.querySelector(".random-btn");

var currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPorsen();
});

function showPorsen() {
  let ıtem = reviews[currentItem];
  author.innerHTML = ıtem.name;
  job.innerHTML = ıtem.job;
  img.src = ıtem.img;
  info.innerHTML = ıtem.text;
}

nextbtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPorsen();
});
prevbtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPorsen();
});
randombtn.addEventListener("click", function () {
  currentItem = randomeNumber();
  showPorsen();
});

function randomeNumber() {
  return Math.floor(Math.random() * reviews.length);
}

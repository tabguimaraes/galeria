"use scrict";

const galeria = document.querySelector(".galeria");

const imgPath = [
  {
    url: "./assets/img/erik-mclean-pHUfHCAEyTU-unsplash.jpg",
    nome: "Imagem 1",
  },
  {
    url: "./assets/img/erik-mclean-qkEc13VaPRA-unsplash.jpg",
    nome: "Imagem 2",
  },
  {
    url: "./assets/img/evan-clark-2oG4ynkv880-unsplash.jpg",
    nome: "Imagem 3",
  },
  {
    url: "./assets/img/jonathan-cooper-kpOGJ2bma4o-unsplash.jpg",
    nome: "Imagem 4",
  },
  {
    url: "./assets/img/luemen-rutkowski-EKa3EPL37Dc-unsplash.jpg",
    nome: "Imagem 5",
  },
  {
    url: "./assets/img/oscar-garcia-castillo-ZMFbova77nI-unsplash.jpg",
    nome: "Imagem 6",
  },
  {
    url: "./assets/img/samuel-ng-__5V3g2mhTE-unsplash.jpg",
    nome: "Imagem 7",
  },
  {
    url: "./assets/img/sonny-mauricio-CBYLA4GK4qk-unsplash.jpg",
    nome: "Imagem 8",
  },
];

console.log(imgPath.length);

function createIMG() {
  imgPath.forEach((element) => {
    console.log(imgPath);
    const img = document.createElement("img");
    galeria.appendChild(img.src[element.url]);
  });
}

createIMG();

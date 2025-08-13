"use scrict";

const galeriaContainer = document.querySelector(".galeria-container");
const galeriaItem = document.querySelectorAll(".galeria-item");
let pagina = 1;
let imgURL = "";
let imgAuthor = "";

async function getImages() {
  try {
    const img = await fetch(`https://picsum.photos/v2/list?page=${pagina}&limit=10`);
    let searchResponse = await img.json().catch();

    searchResponse.forEach((item) => {
      imgAuthor = item.author;
      imgURL = item.download_url;
      setImages(imgAuthor, imgURL);
    });
  } catch (error) {
    console.log(error);
  }
}

getImages();

function setImages(author, url) {
  const img = document.createElement("img");
  const picture = document.createElement("picture");
  const span = document.createElement("span");
  picture.classList.add("galeria-item");
  img.src = `${url}`;
  img.alt = author;
  span.innerText = author;
  galeriaContainer.appendChild(picture);
  picture.appendChild(img);
  picture.appendChild(span);
}

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const scrollHeight = document.documentElement.scrollHeight;

  let PosicaoScroll = (scrollY / (scrollHeight - windowHeight)) * 100;

  if (PosicaoScroll > 50) {
    pagina++;
    PosicaoScroll = 0;
    getImages();
  }
});

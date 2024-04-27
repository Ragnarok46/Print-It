const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tag-line");
let index = 0;

const leftArrow = document.querySelector(".arrow_left");
leftArrow.addEventListener("click", function () {
  console.log(slides.length, index);
  if (index === 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  domUpdate();
  checkSelected();
});

const rightArrow = document.querySelector(".arrow_right");
rightArrow.addEventListener("click", function () {
  console.log(slides.length, index);
  if (slides.length > index + 1) {
    index++;
  } else {
    index = 0;
  }

  domUpdate();
  checkSelected();
});

function domUpdate() {
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;
}

const dotDiv = document.querySelector(".dots");

function checkSelected() {
  const listDots = document.querySelectorAll(".dot");
  listDots.forEach((dot, indexDot) => {
    if (index === indexDot) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

slides.forEach((slide, indexGallery) => {
  // creeer l'element
  const dot = document.createElement("button");
  // rajouter le click
  dot.addEventListener("click", () => {
    index = indexGallery;
    domUpdate();
    checkSelected();
  });

  // rajouter la class
  dot.className = "dot";

  // rajoute au DOM
  dotDiv.append(dot);
});

checkSelected();

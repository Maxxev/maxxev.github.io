const banniereConstruction = document.getElementById("banniere-construction");

banniereConstruction.addEventListener("click", e => {
    banniereConstruction.style.display = "none";
    document.documentElement.style.setProperty("--decalage-construction", 0);
});



// CAROUSEL

const carouselBack = document.getElementById("carousel-back");
const carouselNext = document.getElementById("carousel-next");
const carouselImgs = document.getElementById("carousel-art").children;
const pathToArt = "images/graphisme/";
const imgAmount = 11;
let currentImg = 0;

switchCarouselImgs(0);

carouselBack.addEventListener("click", e => {
    switchCarouselImgs(-1);
});

carouselNext.addEventListener("click", e => {
    switchCarouselImgs(1);
});

function switchCarouselImgs(amount) {
    currentImg = mod(currentImg + amount, imgAmount);
    carouselImgs[0].style.backgroundImage = `url(${pathToArt}${mod(currentImg - 1, imgAmount)}.png)`;
    carouselImgs[1].style.backgroundImage = `url(${pathToArt}${currentImg}.png)`;
    carouselImgs[2].style.backgroundImage = `url(${pathToArt}${mod(currentImg + 1, imgAmount)}.png)`;
}

function mod(x, y) {
    while (x < 0)
        x += y;
    return x % y;
}
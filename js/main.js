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


// FACEBOOK POST

let lastResize = 0;
let resizeId;
const facPosts = document.getElementsByClassName("facebook-post");
const timeoutDelay = 300;
addEventListener("resize", updateFacebookPostsWidth);

updateFacebookPostsWidth();
// updateFacebookPostsSize();
function updateFacebookPostsWidth() {
    if (Date.now() < lastResize + timeoutDelay) {
        clearTimeout(resizeId);
    }
    
    lastResize = Date.now();
    resizeId = setTimeout(() => {
        for (post of facPosts) {
            let result = Math.round(post.parentNode.scrollWidth);
            post.parentElement.backgroundColor = "red";
            // console.log(post.parentNode.scrollWidth);
            post.src = post.src.slice(0, post.src.indexOf("width=") + 6) + result;
        }
    }, timeoutDelay);
}
const timer = ms => new Promise(res => setTimeout(res, ms));
async function updateFacebookPostsHeight() {
    while (true)
    {
        for (post of facPosts) {
            // post.style.height = post.contentWindow.document.querySelector("._li").scrollHeight + 'px';
            console.log(post.contentWindow.document.body);
        }
        await timer(300);
    }
}
updateFacebookPostsHeight();
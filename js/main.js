// BANNIERE CONSTRUCTION
function banniereConstruction() {
    const banniereConstruction = document.getElementById("banniere-construction");
    
    banniereConstruction.addEventListener("click", e => {
        banniereConstruction.style.display = "none";
        document.documentElement.style.setProperty("--decalage-construction", 0);
    });
}
banniereConstruction();

// CAROUSEL
function carousel() {
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
}
carousel();

// FACEBOOK POST
function facebookPost() {
    let lastResize = 0;
    let resizeId;
    const facPosts = document.getElementsByClassName("facebook-post");
    const timeoutDelay = 200;

    addEventListener("resize", updateFacebookPostsWidth);
    function updateFacebookPostsWidth() {
        if (Date.now() < lastResize + timeoutDelay)
            clearTimeout(resizeId);
        
        lastResize = Date.now();
        resizeId = setTimeout(() => {
            for (post of facPosts) {
                let result = Math.round(post.parentNode.scrollWidth * 1);
                post.parentElement.backgroundColor = "red";
                post.src = post.src.slice(0, post.src.indexOf("width=") + 6) + result;
            }
        }, timeoutDelay);
    }
    updateFacebookPostsWidth();

        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i))
        {
            for (let i = facPosts.length - 1; i >= 0; i--)
                facPosts[i].remove();

            document.getElementById("message-fb-mobile").style.display = "initial";
        }
        else {
            for (post of facPosts)
                post.style.visibility = "visible";
            const urls = document.getElementsByClassName("facebook-url");
            for (let i = urls.length - 1; i >= 0; i--)
                urls[i].remove();
        }
}
facebookPost();
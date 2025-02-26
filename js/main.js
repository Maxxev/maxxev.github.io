// alert("Hello World!");
let banniereConstruction = document.getElementById("banniere-construction");

banniereConstruction.addEventListener("click", e => {
    banniereConstruction.style.display = "none";
    document.documentElement.style.setProperty("--decalage-construction", 0);
});
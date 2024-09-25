const slides = [
    {
        "image":"./assets/images/slideshow/slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"./assets/images/slideshow/slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"./assets/images/slideshow/slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"./assets/images/slideshow/slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentIndex = 0;
let image = document.querySelector(".banner-img");
let tagline = document.querySelector(".banner-tagline");
let bulletPoints = document.querySelector(".dots");

// Fonction pour mettre à jour l'image, la tagline et les bullet points
function updateBanner(index) {
    image.setAttribute("src", slides[index].image);
    tagline.innerHTML = slides[index].tagLine;
    updateBulletPoints(index);
}

// Génération des bullet points une seule fois
function generateBulletPoints() {
    slides.forEach((slide, index) => {
        let bullet = document.createElement("span");
        bullet.classList.add("dot");
        if (index === 0) {
            bullet.classList.add("dot_selected");
        }
        bulletPoints.appendChild(bullet);
    });
}

// Mise à jour de l'état actif des bullet points
function updateBulletPoints(index) {
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("dot_selected", i === index);
    });
}

// Gestion du clic sur la flèche gauche
let FlecheGauche = document.querySelector(".arrow_left");
FlecheGauche.addEventListener("click", function () {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateBanner(currentIndex);
    console.log("Tu as cliqué sur la flèche de gauche !");
});

// Gestion du clic sur la flèche droite
let FlecheDroite = document.querySelector(".arrow_right");
FlecheDroite.addEventListener("click", function () {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateBanner(currentIndex);
    console.log("Tu as cliqué sur la flèche de droite !");
});

// Initialisation de la bannière et des bullet points
generateBulletPoints();
updateBanner(currentIndex);

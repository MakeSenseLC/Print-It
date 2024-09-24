const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let FlecheGauche = document.querySelector(".arrow_left"); 

FlecheGauche.addEventListener("click", function () {
	console.log("Tu as cliqué sur la flêche de gauche !")
})

let FlecheDroite = document.querySelector(".arrow_right");

FlecheDroite.addEventListener("click", function () {
	console.log("Tu as cliqué sur la flêche de droite !")
})

slides.length;
	console.log(slides.length)

let bulletPoints = document.querySelector(".dots");
let bulletPoint = '<span class="dot"></span>';
let i = 0 
	while (i < slides.length) {
		bulletPoints.innerHTML += bulletPoint; 
		i++
	}


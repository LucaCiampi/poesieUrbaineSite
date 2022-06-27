document.addEventListener("DOMContentLoaded", () => {

})

const sliderSize = 3;

const sliderIndexTitle = document.getElementById('autresOeuvres-slideIndex');
const sliderTitle = document.getElementById('autresOeuvres-text-title');
const sliderBio = document.getElementById('autresOeuvres-text-bio');
const sliderIllustration = document.getElementById('autresOeuvres-illustration');

const sliderIllustrationImgKowees = document.getElementById('autresOeuvres-illustration-img--kowees');
const sliderIllustrationImgNaufrages = document.getElementById('autresOeuvres-illustration-img--naufrages');
const sliderIllustrationImgYggdrasil = document.getElementById('autresOeuvres-illustration-img--yggdrasil');

let currentSliderIndex = 1;

function nextOeuvreSlide() {
    if (currentSliderIndex < sliderSize) {
        currentSliderIndex++;
    }
    updateSliderContent();
}

function previousOeuvreSlide() {
    if (currentSliderIndex > 1) {
        currentSliderIndex--;
    }
    updateSliderContent();
}

function updateSliderContent() {
    sliderIndexTitle.innerHTML = "0" + currentSliderIndex;
    sliderTitle.innerHTML = sliderContent[currentSliderIndex-1].title;
    sliderBio.innerHTML = sliderContent[currentSliderIndex-1].bio;

    updateSliderContentIllustration();
}

function updateSliderContentIllustration() {
    switch (currentSliderIndex) {
        case 1:
            sliderIllustrationImgNaufrages.classList.remove('hidden');
            sliderIllustrationImgYggdrasil.classList.add('hidden');
            sliderIllustrationImgKowees.classList.add('hidden');
            break;
        case 2:
            sliderIllustrationImgNaufrages.classList.add('hidden');
            sliderIllustrationImgYggdrasil.classList.remove('hidden');
            sliderIllustrationImgKowees.classList.add('hidden');
            break;
        case 3:
            sliderIllustrationImgNaufrages.classList.add('hidden');
            sliderIllustrationImgYggdrasil.classList.add('hidden');
            sliderIllustrationImgKowees.classList.remove('hidden');
            break;
        default:
            break;
    }
}

const sliderContent = [
    {
        "title": "Les naufragés, une plongée au coeur de l'histoire",
        "bio": "Connaissez-vous le France ? Ce bateau à vapeur qui était destiné à faire voyager touristes et habitants d'Annecy sur le lac a mystérieusement coulé le 13 mars 1971… La légende raconte qu’il aurait pris vie au fond du lac mais qu’il aurait besoin d’aide afin d'achever sa métamorphose. Vous seul pouvez l’aider. Serez vous à la hauteur de cette mission ?",
        "img": "../images/autresOeuvres/naufrages.jpg"
    },
    {
        "title": "Souche de vie",
        "bio": "Le majestueux marronnier du jardin de l’évêché a été coupé sans qu’il n’ai pu assurer sa succession. C’est là, au pied de ce qu’il reste de cet arbre centenaire qu’attend un délicat fruit de cristal. Seule une personne avec suffisamment d’attention pourra ramasser ce fragment d’âme. Seul celui qui le poussera à se développer pourra se voir remettre sa succession, son dernier fruit. Cela peut être vous, cela peut être moi, seulement l’heure tourne, et la souche de notre ami n’est là que jusqu’à la fin de l’été…",
        "img": "../images/autresOeuvres/yggdrasil.png"
    },
    {
        "title": "Le Coeur d'Annecy",
        "bio": "Un récent séisme a endommagé le cœur d’Annecy, causant d’importantes pénuries d’eau qui mettent la ville en péril. Vous devez réparer la fontaine symbolisant son cœur et ainsi faire revenir l’eau et la vie. Pour cela, résolvez les énigmes et percez ses secrets...",
        "img": "../images/autresOeuvres/kowees.png"
    }
]
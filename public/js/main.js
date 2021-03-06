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
        "title": "Les naufrag??s, une plong??e au coeur de l'histoire",
        "bio": "Connaissez-vous le France ? Ce bateau ?? vapeur qui ??tait destin?? ?? faire voyager touristes et habitants d'Annecy sur le lac a myst??rieusement coul?? le 13 mars 1971??? La l??gende raconte qu???il aurait pris vie au fond du lac mais qu???il aurait besoin d???aide afin d'achever sa m??tamorphose. Vous seul pouvez l???aider. Serez vous ?? la hauteur de cette mission ?",
        "img": "../images/autresOeuvres/naufrages.jpg"
    },
    {
        "title": "Souche de vie",
        "bio": "Le majestueux marronnier du jardin de l?????v??ch?? a ??t?? coup?? sans qu???il n???ai pu assurer sa succession. C???est l??, au pied de ce qu???il reste de cet arbre centenaire qu???attend un d??licat fruit de cristal. Seule une personne avec suffisamment d???attention pourra ramasser ce fragment d?????me. Seul celui qui le poussera ?? se d??velopper pourra se voir remettre sa succession, son dernier fruit. Cela peut ??tre vous, cela peut ??tre moi, seulement l???heure tourne, et la souche de notre ami n???est l?? que jusqu????? la fin de l?????t?????",
        "img": "../images/autresOeuvres/yggdrasil.png"
    },
    {
        "title": "Le Coeur d'Annecy",
        "bio": "Un r??cent s??isme a endommag?? le c??ur d???Annecy, causant d???importantes p??nuries d???eau qui mettent la ville en p??ril. Vous devez r??parer la fontaine symbolisant son c??ur et ainsi faire revenir l???eau et la vie. Pour cela, r??solvez les ??nigmes et percez ses secrets...",
        "img": "../images/autresOeuvres/kowees.png"
    }
]
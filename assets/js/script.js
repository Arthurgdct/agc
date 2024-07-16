/*fonctionalité pour copier du texte dans le presse papier (fonctionne sous firefox aussi)*/
const discord = document.getElementById('discord');
discord.addEventListener('click', () => { navigator.clipboard.writeText('Ettowak#1997') });
discord.addEventListener('click', () => {alert('Nom d\'utilisateur copié dans le presse-papier.')});
const email = document.getElementById('email');
email.addEventListener('click', () => {alert('Email copié dans le presse-papier.')});
email.addEventListener('click', () => { navigator.clipboard.writeText('arthurgdct@gmail.com') });
/*gestion de la phrase d'acceuil*/
document.getElementById('arrow').addEventListener('click', () => {
    modifySentence(newSentence());
}, false);
/*gestion des boutons pour changer la taille de la description*/
document.getElementById('veryShort').addEventListener('click', () => {
    modifyDesc('Bonjour, je m\'appelle Arthur. J\'ai 27 ans et je suis passionné d\'informatique. Je suis a la recherche d\'une alternance, je suis déterminé & j\'ai une bonne expérience de la vie en entreprise.')
})
document.getElementById('short').addEventListener('click', () => {
    modifyDesc('Bonjour, je m\'appelle Arthur. J\'ai 27 ans et je suis passionné d\'informatique depuis petit. Je suis a la recherche d\'une alternance afin de continuer ma reconversion et vivre d\'un emploi dans un domaine qui me passionne véritablement. Je suis déterminé & j\'ai une bonne expérience de la vie en entreprise.')
})
document.getElementById('classic').addEventListener('click', () => {
    modifyDesc('Bonjour, je m\'appelle Arthur. J\'ai 27 ans et je suis passionné d\'informatique depuis petit. Dans la vie j\'ai d\'abord fait des études de menuisierie, puis j\'ai travailler quelques années à l\'usine, que j\'ai finalement laissée derrière moi pour tenter ma chance et devenir développeur, d\'en faire mon métier, avec une formation. Ce qui nous emmène à ce jour, où je suis à la recherche d\'une alternance afin de continuer ma reconversion et vivre d\'un emploi dans un domaine qui me passionne véritablement. Je suis quelqu\'un de déterminé qui a une bonne expérience de la vie en entreprise et qui a énormément envie d\'en apprendre plus chaque jour.')
})
document.getElementById('long').addEventListener('click', () => {
    modifyDesc('Bonjour, je m\'appelle Arthur. J\'ai 27 ans et je suis passionné d\'informatique depuis petit, ou j\'ai découvert les ordinateurs grâce à mon frère et les Lan de "Age Of Empire" dans notre garage. Il n\'aura fallu que quelques années avant que je commence à "bidouiller" mes premiers serveurs Minecraft, puis bien d\'autres aventures informatiques ont suivi... Mais dans la vie, j\'ai d\'abord fait des études de menuiserie, puis j\'ai travaillé quelques années à l\'usine, que j\'ai finalement laissée derrière moi pour tenter ma chance et devenir développeur, d\'en faire mon métier, avec une formation. Ce qui nous emmène à ce jour, où je suis à la recherche d\'une alternance afin de continuer ma reconversion et vivre d\'un emploi dans un domaine qui me passionne véritablement. Toute cette petite histoire pour dire que je suis quelqu\'un de déterminé qui a une bonne expérience de la vie en entreprise et qui a énormément envie d\'en apprendre plus chaque jour.')
})
/*caroussel*/
const items = document.querySelectorAll('.carrouselimg');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante() {
    items[count].classList.remove('active');
    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }
    items[count].classList.add('active')
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente() {
    items[count].classList.remove('active');
    if (count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }
    items[count].classList.add('active')
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e) {
    if (e.keyCode === 37) {
        slidePrecedente();
    } else if (e.keyCode === 39) {
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)
/*modification phrase accueil*/
function modifyDesc(newText) {
    const desc = document.getElementById('description');
    desc.firstChild.nodeValue = newText;
}

function modifySentence(newText) {
    const sentence = document.getElementById('sentence');
    sentence.firstChild.nodeValue = newText;
}

function newSentence() {
    let search = 'Est à la recherche d\'un apprentissage';
    let dev = 'Est developpeur Web Junior';
    let happy = 'Est content de vous voir ici !';
    let hope = 'Espère que le site vous plait !';
    let minecraft = 'C\'est peut etre inspiré de minecraft ??'
    let more = 'Veux toujours en apprendre plus';
    let best = 'Fera toujours de son mieux !';
    let team = 'Vie pour le travail d\'équipe !';
    let passion = 'Est véritablement passionné d\'informatique';
    let ask = 'Se demande si vous allez appuyer sur la flèche ?';
    let powered = 'Powered by Html Css Js php and more';
    let since = 'Sur terre depuis déjà 27 ans !';
    let result = getRandomInt(1, 12);
    if (result == 1) {
        return search;
    } else if (result == 2) {
        return dev;
    } else if (result == 3) {
        return happy;
    } else if (result == 4) {
        return hope;
    } else if (result == 5) {
        return minecraft;
    } else if (result == 6) {
        return more;
    } else if (result == 7) {
        return best;
    } else if (result == 8) {
        return team;
    } else if (result == 9) {
        return passion;
    } else if (result == 10) {
        return ask;
    } else if (result == 11) {
        return powered;
    }else if (result == 12) {
        return since;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    max = max + 1;
    return Math.floor(Math.random() * (max - min) + min)
}

function modifyimg(src) {
    const bigpict = document.getElementById('bigpicture');
    bigpict.setAttribute('src', src);
}


// menu burger

const menuBurger = document.querySelector(".menuBurger")
const header = document.querySelector(".header")

menuBurger.addEventListener('click', () => {
    header.classList.toggle('mobile-menu')
})



// Archives : Menu déroulant des expositions (par année)

const titleh2 = document.querySelectorAll('h2');

titleh2.forEach(function (titleh2) {
    const gridArchives = titleh2.nextElementSibling;
    titleh2.addEventListener('click', function () {
        gridArchives.classList.toggle('hidden');
        titleh2.classList.toggle('rotateSpan')
    });
});


// Bouton qui permet de tout basculer (Afficher/Masquer) dans la page Archives

const BoutonToutBasculer = document.querySelector('.BasculerTout');
const gridArchives = document.querySelectorAll('.gridArchives');
const titleh = document.querySelectorAll('h2');

BoutonToutBasculer.addEventListener('click', function () {
    const isActive = BoutonToutBasculer.classList.toggle('active');

    gridArchives.forEach(function (element) {
        element.classList.toggle('hidden', !isActive);
    });

    titleh2.forEach(function (element) {
        element.classList.toggle('rotateSpan', isActive);
    });
});


// Pop Up dans les Expositions

const imagePopups = document.querySelectorAll('.image-popup');
const overlay = document.querySelector('.overlay');

imagePopups.forEach(function (imagePopup) {
    const image = imagePopup.querySelector('.image');

    image.addEventListener('click', function () {
        image.classList.add('active');
        overlay.classList.add('active');
    });

    overlay.addEventListener('click', function () {
        image.classList.remove('active');
        overlay.classList.remove('active');
    });
});




// lire plus bouton dans les Expositions

const lirePlusButton = document.querySelector('.lirePlus');
const extrait = document.querySelector('.extrait');
const textComplet = document.querySelector('.textComplet');

lirePlusButton.addEventListener('click', function () {
    textComplet.style.display = 'block';
    lirePlusButton.style.display = 'none';
});
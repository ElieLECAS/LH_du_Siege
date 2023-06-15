// menu burger
const menuBurger = document.querySelector(".menuBurger")
const header = document.querySelector(".header")

menuBurger.addEventListener('click', () => {
    header.classList.toggle('mobile-menu')
})

// Pop Up

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

// lire plus bouton

const lirePlusButton = document.querySelector('.lirePlus');
const extrait = document.querySelector('.extrait');
const textComplet = document.querySelector('.textComplet');

lirePlusButton.addEventListener('click', function () {
    textComplet.style.display = 'block';
    lirePlusButton.style.display = 'none';
});



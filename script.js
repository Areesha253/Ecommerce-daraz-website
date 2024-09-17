$(document).ready(function () {

// ---SIDE-FIXEDBAR----
document.addEventListener('scroll', function () {
    var fixedSideBar = document.querySelector('.side-fixedbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 30) {
        fixedSideBar.classList.add('visible');
    } else {
        fixedSideBar.classList.remove('visible');
    }
});

// ---SIDE-FIXEDBAR-BACK-TO-TOP-BTN----
let backToTop = document.querySelector(".back-to-top");

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
backToTop.addEventListener('click', scrollToTop);

// -----SIDE-FIXEDBAR-BTN-FUNCTIONS-----
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
document.querySelector('.floating-box-txt').addEventListener('click', () => scrollToSection('Flash-sale'));
document.querySelectorAll('.floating-box-txt')[1].addEventListener('click', () => scrollToSection('Categories'));
document.querySelectorAll('.floating-box-txt')[2].addEventListener('click', () => scrollToSection('For-You'));

// -----MESSAGE-BOX-----

            const popupBtn = document.querySelector('.popup-btn');
            const messageBox = document.querySelector('.message-box-visibility');
            const closeButton = document.querySelector('.close-box-btn');

            popupBtn.addEventListener('click', function() {
                popupBtn.style.visibility = 'hidden';
                messageBox.style.display = 'block';
            });
            closeButton.addEventListener('click', function() {
                messageBox.style.display = 'none';
                popupBtn.style.visibility = 'visible';
            });

// ----HERO-SECTION-CAROUSEL---
    $('.hero-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        // nav: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 450
    });
});
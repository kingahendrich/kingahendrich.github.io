// ------------------------------navbar--------------------------

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}


if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// ------------------------------accordeon-----------------------

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// ----------------------------services modal--------------

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'), 
    modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})


let swiper = new Swiper('.portfolio__container', {
    cssMode: true, 
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    }, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }, 
});
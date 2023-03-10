
/* ===== Show Sidebar ===== */

const navMenu = document.getElementById('sidebar'),
    navItems = document.querySelectorAll('.nav__item'),
    navTootle = document.getElementById('nav-toogle'),
    navClose = document.getElementById('nav-close');

if (navTootle) {
    navTootle.addEventListener('click', () => navMenu.classList.add('show-sidebar'));
}

if (navClose) {
    navClose.addEventListener('click', closeMenu);
}

navItems.forEach((navItem) => navItem.addEventListener('click', closeMenu));

function closeMenu() {
    navMenu.classList.remove('show-sidebar');
}


/* ===== Skills Tabs ===== */

const activeClassName = 'skills__active';

const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContents => tabContents.classList.remove(activeClassName));
        target.classList.add(activeClassName);

        tabs.forEach(tab => tab.classList.remove(activeClassName));
        tab.classList.add(activeClassName);
    });
});


/* ===== Work ===== */

// Mixitup - Portfolio filter

const portfolioMixer = mixitup('.work__container', {
    selectors: { target: '.work__card' },
    animation: { duration: 300 }
})

// Link - Active work

const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach(link => link.classList.remove('active__work'));
    this.classList.add('active__work');
}

linkWork.forEach(link => link.addEventListener('click', activeWork));

// Popup

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('work__button')) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    document.querySelector('.portfolio__popup').classList.toggle('open');
}

document.querySelector('.portfolio__popup-close').addEventListener('click', togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector('.work__img').src;
    document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector('.work__title').innerHTML;
    document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector('.portfolio__item-details').innerHTML;
}


/* ===== Services ===== */

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let openModal = (modalClick) => {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((btn, i) => btn.addEventListener('click', () => openModal(i)));

modalCloses.forEach(close => close.addEventListener('click', () =>
    modalViews.forEach(modalView => modalView.classList.remove('active-modal'))));


/* ===== Testimonials ===== */

// Swiper

const swiper = new Swiper('.testimonial__container', {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});


/* ===== Contact ===== */

const inputs = document.querySelectorAll('.input');

function focusAnimation() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurAnimation() {
    let parent = this.parentNode;

    if (this.value == "") {
        parent.classList.remove('focus');
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusAnimation);
    input.addEventListener('blur', blurAnimation);
});


/* ===== Scroll Sections Active Link ===== */

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');
        let linkId = '#' + sectionId + '-link';

        let element = document.querySelector('.nav__menu ' + linkId);
        if (element == null) return;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            element.classList.add('active-link');
        } else {
            element.classList.remove('active-link');
        }
    });
}

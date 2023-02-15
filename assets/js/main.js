
/* ===== Skills Tabs ===== */

const activeClassName = "skills__active";

const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () =>
    {
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
    this.classList.add('active__work')
}

linkWork.forEach(link => link.addEventListener('click', activeWork));

const handleBurgerMenu = (nav) => {
    const menu = document.getElementById('burgerMenu');
    const menuBtn = burgerMenu.getElementsByClassName('burger-menu__button')[0];
    const menuBackdrop = burgerMenu.getElementsByClassName('burger-menu__backdrop')[0];

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('opened');
        nav.classList.toggle('display');
        document.documentElement.classList.toggle('lock');
    });

    menuBackdrop.addEventListener('click', () => {
        menu.classList.remove('opened');
        nav.classList.remove('display');
        document.documentElement.classList.remove('lock');
    });
}

export { handleBurgerMenu };
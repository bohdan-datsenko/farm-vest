import { handleParallax } from './modules/prlxMouse/prlx-mouse.js';
import { handleHeaderScroll } from './modules/headerScroll/header-scroll.js';
import { handleBurgerMenu } from './modules/burgerMenu/burgerMenu.js';
import { handleAccordionOpen } from './modules/accordion/accordion.js'

// add parallax effect
handleParallax();

// add header scrolling
const header = document.getElementById('header');
handleHeaderScroll(header);

// add burgerMenu
const nav = header.getElementsByClassName('header-menu')[0]
handleBurgerMenu(nav);

// add accordion
handleAccordionOpen();
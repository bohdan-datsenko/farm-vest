const accordion = document.getElementById('accordion');
const accordionItems = accordion.getElementsByClassName('accordion-item');

export const handleAccordionOpen = () => {
    for (let i = 0; i < accordionItems.length; i++) {
        accordionItems[i].addEventListener('click', () => {
            accordionItems[i].classList.toggle('opened');
        });
    }
}
/* Paralax mouse */
const maxOffsetX = 40;
const maxOffsetY = 40;

function getOffsetFromCenter(element) {
    const rect = element.getBoundingClientRect();
    
    const viewportCenterY = window.innerHeight / 2;
    const elementCenterY = rect.top + rect.height / 2;
    const offsetFromCenter = elementCenterY - viewportCenterY;

    return offsetFromCenter;
}

const getScale = (itemData, x = 1, y = 1) => {
    let resultScale = { x, y };

    if (itemData.prlxScale) {
        resultScale = { 
            x: itemData.prlxScale,
            y: itemData.prlxScale
        };
    }

    if (itemData.prlxScaleX) {
        resultScale.x = itemData.prlxScaleX;
    }
    if (itemData.prlxScaleY) {
        resultScale.y = itemData.prlxScaleY;
    }

    return resultScale;
}

const getDirection = (itemData, x = 1, y = 1) => {
    let resultDirection = { x, y };

    if (!isNaN(itemData.prlxDirection)) {
        resultDirection = { 
            x: itemData.prlxDirection,
            y: itemData.prlxDirection
        };
    }

    if (!isNaN(itemData.prlxDirectionX)) {
        resultDirection.x = itemData.prlxDirectionX;
    }

    if (!isNaN(itemData.prlxDirectionY)) {
        resultDirection.y = itemData.prlxDirectionY;
    }

    return resultDirection;
}

// add parallax for scrolling
const handleScroll = (itemsContainer) => {
    const items = itemsContainer.children;

    // get default scale & direction
    const { y: generalScaleY } = getScale(itemsContainer.dataset);
    const { y: generalDirectionY } = getDirection(itemsContainer.dataset);
    
    
    for (let i = 0; i < items.length; i++) {    
        const offsetFromCenter = getOffsetFromCenter(items[i]);

        if (Math.abs(offsetFromCenter) < (window.innerHeight / 2)) {
            // get item scale & direction
            let { y: scaleY } = getScale(items[i].dataset, 1, generalScaleY);
            // const { y: directionY } = getDirection(items[i].dataset, 1, generalDirectionY); // TODO
        
            // multiply scaleY to adjust scrolling translate and apply direction
            scaleY *= 0.15;

            const offsetY = offsetFromCenter * scaleY;

            items[i].style.transform = `translateY(${offsetY}px)`;
        }
    }
}

// add parallax for mouse move
const handleMouseMove = (e, itemsContainer) => {
    const items = itemsContainer.children;

    // get default direction & scale
    const generalScale = getScale(itemsContainer.dataset);
    const generalDirection = getDirection(itemsContainer.dataset);

    for (let i = 0; i < items.length; i++) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
    
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // set transition to make translate smoothly
        items[i].style.transition = 'all 0.2s ease';
    
        // get item scale
        let { x: scaleX, y: scaleY } = getScale(items[i].dataset, generalScale.x, generalScale.y);
    
        // get item direction
        const { x: directionX, y: directionY } = getDirection(items[i].dataset, generalDirection.x, generalDirection.y);
    
        // apply direction
        scaleX *= directionX;
        scaleY *= directionY;
    
        let offsetX = 0;
        let offsetY = 0;

        if (scaleX !== 0) {
            offsetX = (mouseX - centerX) / (maxOffsetX * scaleX);
        }
        if (scaleY !== 0) {
            offsetY = (mouseY - centerY) / (maxOffsetY * scaleY);
        }

        items[i].style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
}

const handleParallax = () => {
    const itemsContainers = document.querySelectorAll('#prlxMouse');

    for (let i = 0; i < itemsContainers.length; i++) {
        const mode = itemsContainers[i].dataset?.prlxMode;

        if (mode == 'mixed') {
            document.addEventListener('mousemove', (e) => handleMouseMove(e, itemsContainers[i]));
            document.addEventListener('scroll', () => handleScroll(itemsContainers[i]));
        } else if (mode == 'scroll') {
            document.addEventListener('scroll', () => handleScroll(itemsContainers[i]));
        } else {
            document.addEventListener('mousemove', (e) => handleMouseMove(e, itemsContainers[i]));
        }
    }
}

export { handleParallax };
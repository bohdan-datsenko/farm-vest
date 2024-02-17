const handleHeaderScroll = (headerElement) => {
    const headerOffsetY = headerElement.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerOffsetY) {
            headerElement.classList.add('header-scroll');
        } else {
            headerElement.classList.remove('header-scroll');
        }
    });
}

export { handleHeaderScroll };
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const scrollImage = document.querySelector('.scroll-image');
    const content = document.querySelector('.content');

    scrollImage.addEventListener('mouseenter', function () {
        // Calculate the scroll distance to reveal the entire image
        const scrollDistance = scrollImage.getBoundingClientRect().bottom + window.scrollY - content.getBoundingClientRect().bottom;

        // Scroll the page down to reveal the entire image with a smooth effect
        window.scrollTo({
            top: scrollDistance,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.clickable-img');

    images.forEach(img => {
        img.addEventListener('click', function() {
            img.classList.toggle('enlarged');
        });
    });
});

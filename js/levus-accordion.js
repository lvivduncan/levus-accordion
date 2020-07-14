document.querySelectorAll('.levus-accordion .title').forEach(item => {
    item.addEventListener('click', function() {
        item.nextElementSibling.classList.toggle('show');
    });
});
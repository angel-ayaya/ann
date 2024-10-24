// script.js
document.querySelectorAll('.bento-card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('rotated'); // Alternar la clase 'rotated' al hacer clic
    });
});

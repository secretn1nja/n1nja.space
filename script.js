document.addEventListener('DOMContentLoaded', () => {
    const flicker = document.querySelector('.flicker');

    setInterval(() => {
        flicker.style.opacity = Math.random() * 0.1;
    }, 100);

    const glitch = document.querySelector('.glitch');
    glitch.addEventListener('mouseover', () => {
        glitch.style.animation = 'glitch 0.3s infinite';
    });
    glitch.addEventListener('mouseout', () => {
        glitch.style.animation = 'glitch 3s infinite alternate';
    });
});
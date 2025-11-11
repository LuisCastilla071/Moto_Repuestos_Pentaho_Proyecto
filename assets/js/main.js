
document.addEventListener('DOMContentLoaded', function () {
    // Inicialización de AOS (Animate On Scroll)
    AOS.init({ once: true, duration: 1000 });

    // Lógica para el menú móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Inicialización de Smooth Scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });


});

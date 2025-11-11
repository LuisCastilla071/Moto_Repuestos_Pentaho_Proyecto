
document.addEventListener('DOMContentLoaded', function () {
    // Inicialización de AOS (Animate On Scroll)
    AOS.init();

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
    });    // Intento de deshabilitar zoom con Ctrl/Cmd + rueda del ratón
    window.addEventListener('wheel', function(event) {
        if (event.ctrlKey || event.metaKey) { // ctrlKey para Windows/Linux, metaKey para Mac
            event.preventDefault();
        }
    }, { passive: false });
    // Intento de deshabilitar pinch-to-zoom en dispositivos táctiles
    document.addEventListener('touchmove', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });
    // Prevenir deslizamientos horizontales en dispositivos táctiles
    let touchStartX = 0;
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length === 1) {
            touchStartX = event.touches[0].clientX;
        }
    }, { passive: false });

    document.addEventListener('touchmove', function(event) {
        if (event.touches.length === 1) {
            const touchMoveX = event.touches[0].clientX;
            const diffX = touchStartX - touchMoveX;

            // Si el movimiento es predominantemente horizontal y excede un umbral
            // Esto es un intento de prevenir el deslizamiento de navegación del navegador
            if (Math.abs(diffX) > 10) { // Umbral de 10px para considerar movimiento horizontal
                event.preventDefault();
            }
        }
    }, { passive: false });
});

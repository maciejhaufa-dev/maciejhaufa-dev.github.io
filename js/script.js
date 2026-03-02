document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       1. FOOTER YEAR AUTO UPDATE
    ===================================================== */

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    /* =====================================================
       2. CONSOLE EASTER EGG
    ===================================================== */

    console.log(
        "%c Hello there! 👋",
        "font-size: 20px; font-weight: bold; color: #2563eb;"
    );
    console.log(
        "Welcome to my portfolio. Feel free to check out the source code on GitHub!"
    );


    /* =====================================================
       3. SLIDER (Project Subpages)
    ===================================================== */

    const slides = document.querySelectorAll('.slide');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    if (slides.length > 0 && next && prev) {

        let index = 0;

        function showSlide(i) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[i].classList.add('active');
        }

        next.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            showSlide(index);
        });

        prev.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        });

    }


    /* =====================================================
       4. LIGHTBOX (If Used)
    ===================================================== */

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryImages = document.querySelectorAll('.lightbox-trigger');

    if (lightbox && lightboxImg && galleryImages.length > 0) {

        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
            });
        });

        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

    }

});

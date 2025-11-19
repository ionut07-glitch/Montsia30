document.addEventListener('DOMContentLoaded', () => {

    async function loadHeaderFooter() {
        try {
            // Pas 1: Carregar el contingut del fitxer
            const response = await fetch('header-footer.html');
            if (!response.ok) {
                // Aquesta línia t'ajudarà a depurar errors 404
                throw new Error(`No es pot carregar (Estat: ${response.status})`);
            }

            const data = await response.text();

            // Pas 2: Processar i Inserir el contingut
            // Creem un contenidor temporal per analitzar l'HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Busquem els elements <header> i <footer> DINS del contingut carregat
            const headerContent = tempDiv.querySelector('header');
            const footerContent = tempDiv.querySelector('footer');

            // 3. Inserció: Només si troba els IDs
            if (document.getElementById('header') && headerContent) {
                document.getElementById('header').innerHTML = headerContent.outerHTML;
            }
            if (document.getElementById('footer') && footerContent) {
                document.getElementById('footer').innerHTML = footerContent.outerHTML;
            }

        } catch (error) {
            // Aquesta és la clau per depurar: mira la consola (F12)
            console.error("🔴 ERROR DE CÀRREGA:", error.message);
        }
    }

    // Crida la funció per iniciar la càrrega del header/footer
    loadHeaderFooter();


    // === Resta del teu codi (Carrusel, Enllaços, etc.) ===
    // Pots deixar la resta del codi just aquí a sota.


    // 2. Codi del CARRUSEL (Aquesta part també ha d'estar dins)
    const slides = document.querySelectorAll('.slide');
    // ... resta del codi del carrusel ...


    // 3. Codi per a Resaltar Enllaços Actius (Aquesta part també ha d'estar dins)
    const links = document.querySelectorAll('.header-links a');
    // ... resta del codi de resaltat ...

}); // <-- Tanca la funció aquí!


// 2. Codi del CARRUSEL (Si Intranet.html té elements .slide, .next, .prev)
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    if (slides[index]) {
        slides[index].classList.add('active');
    }
}

const nextButton = document.querySelector('.next');
if (nextButton) {
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
}

const prevButton = document.querySelector('.prev');
if (prevButton) {
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
}

if (slides.length > 0) {
    showSlide(currentIndex);
}


// 3. Codi per a Resaltar Enllaços Actius
const links = document.querySelectorAll('.header-links a');
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
        link.removeAttribute('href');
    }
});
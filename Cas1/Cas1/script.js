fetch('header-footer.html')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        document.getElementById('header').innerHTML = htmlDoc.querySelector('header').outerHTML;
        document.getElementById('footer').innerHTML = htmlDoc.querySelector('footer').outerHTML;
    });

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

showSlide(currentIndex);

const links = document.querySelectorAll('.header-links a');
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
        link.removeAttribute('href');
    }
});
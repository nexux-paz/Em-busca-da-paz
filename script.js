// JavaScript para Animações e Interatividade

// --- Animação de Fundo (Estrelas) ---
const backgroundAnimation = document.querySelector('.background-animation');
const numStars = 120;

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = Math.random() * 3 + 1 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 5 + 's';
    star.style.animationDuration = Math.random() * 5 + 3 + 's';
    backgroundAnimation.appendChild(star);
}

for (let i = 0; i < numStars; i++) {
    createStar();
}

// --- Animação de Rolagem (Fade-in das Seções) ---
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// --- Efeito Parallax no Hero Section ---
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    const ctaHeroMain = document.getElementById('call-to-action-main');

    if (heroTitle) heroTitle.style.transform = `translateY(${scrollY * 0.4}px)`;
    if (heroSubtitle) heroSubtitle.style.transform = `translateY(${scrollY * 0.3}px)`;
    if (ctaHeroMain) ctaHeroMain.style.transform = `translateY(${scrollY * 0.2}px)`;
});

// --- Lógica de Redirecionamento para a Página de Pagamento Segura ---
const openCheckoutButtons = document.querySelectorAll('#call-to-action-main, #call-to-action-footer');

// URL para a página de pagamento REAL do seu produto na Kiwify
const realPaymentGatewayURL = "https://pay.kiwify.com.br/nohNuBP"; // <-- AGORA COM O SEU LINK DA KIWIFY!

openCheckoutButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link (#)

        // Redireciona o usuário para a URL do gateway de pagamento
        window.location.href = realPaymentGatewayURL;
    });
});
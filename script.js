document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile
    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    mobileMenu.addEventListener('click', () => {
        // Alterna a classe 'active' para mostrar/esconder menu
        navList.classList.toggle('active');

        // Animação simples do ícone hamburguer (opcional)
        mobileMenu.classList.toggle('toggle');
    });

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // 2. Atualizar Ano no Rodapé automaticamente
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // 3. Efeito de Scroll Suave (Smooth Scroll) para navegadores antigos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
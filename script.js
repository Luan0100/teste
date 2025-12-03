// Arquivo javascript.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os elementos da galeria
    const fotos = document.querySelectorAll('.foto-item');
    
    // 2. Seleciona os elementos do Lightbox (Modal)
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const fecharBtn = document.querySelector('.fechar');

    // Função para abrir o lightbox
    fotos.forEach(foto => {
        foto.addEventListener('click', () => {
            // Define o caminho da imagem grande
            lightboxImg.src = foto.src;
            
            // Define a legenda com base no atributo 'alt'
            lightboxCaption.innerHTML = foto.alt;
            
            // Exibe o lightbox
            lightbox.style.display = 'block';
        });
    });

    // Função para fechar o lightbox ao clicar no "x"
    fecharBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Função para fechar o lightbox ao clicar fora da imagem
    window.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Função para fechar o lightbox com a tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape" && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });

});
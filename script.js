document.addEventListener('DOMContentLoaded', () => {
    
    // --- ANIMAÇÃO 3: Animação de Entrada ao Carregar (Fade-In das Seções) ---
    const secoes = document.querySelectorAll('.secao-detalhe');
    
    secoes.forEach((secao, index) => {
        // Inicializa as seções como transparentes e fora da tela
        secao.style.opacity = 0;
        secao.style.transform = 'translateY(20px)';
        
        // Adiciona um atraso para um efeito cascata
        setTimeout(() => {
            secao.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            secao.style.opacity = 1;
            secao.style.transform = 'translateY(0)';
        }, index * 200); // Atraso de 200ms entre cada seção
    });


    // --- ANIMAÇÃO 4: Rotação no Clique (Clique no Título da Introdução) ---
    const tituloIntroducao = document.querySelector('#introducao h2');
    let estaGirando = false;

    tituloIntroducao.style.cursor = 'pointer'; // Indica que é clicável
    tituloIntroducao.style.transition = 'transform 0.5s ease';

    tituloIntroducao.addEventListener('click', () => {
        if (!estaGirando) {
            // Inicia o giro
            tituloIntroducao.style.transform = 'rotate(360deg)';
            estaGirando = true;
            
            // Reverte o giro após 1 segundo
            setTimeout(() => {
                tituloIntroducao.style.transform = 'rotate(0deg)';
                estaGirando = false;
            }, 1000);
        }
    });

    // --- Funcionalidade extra: Mensagem ao clicar no botão de destaque (Animacão 1) ---
    const botaoTatico = document.getElementById('animacao1');
    botaoTatico.addEventListener('click', () => {
        alert('Detalhe Tático: O "pressing" consiste em uma organização de toda a equipe para recuperar a bola imediatamente após perdê-la, muitas vezes na zona ofensiva do campo.');
    });

});
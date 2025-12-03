document.addEventListener('DOMContentLoaded', () => {
    
    const btn = document.getElementById('goal-btn');
    const overlay = document.getElementById('goal-overlay');

    // ANIMAÇÃO 4: Lógica de ativação
    btn.addEventListener('click', () => {
        // Mostra o overlay
        overlay.style.display = 'flex';
        
        // Efeito extra: vibração na tela (opcional, via JS)
        document.body.style.transform = "translate(2px, 2px)";
        setTimeout(() => document.body.style.transform = "translate(-2px, -2px)", 50);
        setTimeout(() => document.body.style.transform = "translate(0, 0)", 100);

        // Remove o overlay automaticamente após 2 segundos
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 2000);
    });

});
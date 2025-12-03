document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica da Neve (Animação Global) ---
    function createSnowflake() {
        const snow = document.createElement('div');
        snow.classList.add('snowflake');
        snow.textContent = '❄'; // Pode mudar para '.' ou '*'
        
        // Posição horizontal aleatória
        snow.style.left = Math.random() * 100 + 'vw';
        
        // Tamanho aleatório
        snow.style.fontSize = Math.random() * 10 + 10 + 'px';
        
        // Duração da queda aleatória (entre 3s e 8s)
        const duration = Math.random() * 5 + 3;
        snow.style.animationDuration = duration + 's';
        
        // Opacidade aleatória
        snow.style.opacity = Math.random();

        document.body.appendChild(snow);

        // Remove o floco depois que cair para não pesar a memória
        setTimeout(() => {
            snow.remove();
        }, duration * 1000);
    }

    // Cria um floco a cada 100ms
    setInterval(createSnowflake, 100);


    // --- Lógica do Presente (Interação) ---
    const giftBox = document.getElementById('gift-box');
    const message = document.getElementById('message');

    giftBox.addEventListener('click', () => {
        // Adiciona a classe que faz a animação de "explodir/sumir"
        giftBox.classList.add('gift-open');

        // Espera a animação terminar (0.5s) e mostra a mensagem
        setTimeout(() => {
            // Esconde o elemento do presente visualmente (já está opacidade 0, mas removemos do fluxo se quiser)
            giftBox.style.display = 'none'; 
            
            // Mostra a mensagem secreta
            message.classList.remove('hidden');
            message.style.display = 'block';
            
            // Efeito extra: Disparar confetes de neve
            for(let i=0; i<20; i++) createSnowflake();
        }, 500);
    });
});
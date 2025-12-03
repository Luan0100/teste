// Arquivo script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Pegar o botão do HTML
    const mudarCorBtn = document.getElementById('mudarCorBtn');
    
    // Lista de cores inspiradas na Barbie
    const coresBarbie = [
        '#fef1f8', // Rosa Claro original
        '#ffd1dc', // Outro tom de rosa
        '#f08080', // Coral Suave
        '#f5f5dc'  // Bege para dar um descanso visual
    ];

    let corAtualIndex = 0;

    // 2. Adicionar um "ouvinte" de evento de clique ao botão
    mudarCorBtn.addEventListener('click', () => {
        // Mudar para a próxima cor na lista
        corAtualIndex = (corAtualIndex + 1) % coresBarbie.length;
        const novaCor = coresBarbie[corAtualIndex];

        // 3. Aplicar a nova cor ao fundo do body
        document.body.style.backgroundColor = novaCor;

        // Opcional: Mudar o texto do botão
        mudarCorBtn.textContent = (corAtualIndex === 0) ? 'Pink Power!' : `Cor Fundo #${corAtualIndex + 1}`;
    });
});
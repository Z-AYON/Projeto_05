const palavraPortfolio = document.getElementById('btnPlay');
const painelImagens = document.getElementById('painelAnimacoes');

function gerenciarPainel(evento) {
    // Isso impede que a página recarregue ao clicar na palavra
    evento.preventDefault();

    // Mostra ou esconde as imagens
    painelImagens.classList.toggle('ativo');
}

// Avisa o JavaScript para olhar quando a palavra for clicada
palavraPortfolio.addEventListener('click', gerenciarPainel);
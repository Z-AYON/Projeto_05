const botaoControle = document.getElementById('btnPlay');
const painelImagens = document.getElementById('painelAnimacoes');

function gerenciarPainel() {
    painelImagens.classList.toggle('ativo');

    if (painelImagens.classList.contains('ativo')) {
        botaoControle.textContent = 'Parar Pinguins';
    } else {
        botaoControle.textContent = 'Liberar Pinguins';
    }
}

botaoControle.addEventListener('click', gerenciarPainel);
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
   
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmar = prompt('Você tem certeza que deseja devolver o jogo? Digite "sim ou "não".');
        if (confirmar = sim) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';}
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');  
        botao.textContent = 'Devolver';
    }
}
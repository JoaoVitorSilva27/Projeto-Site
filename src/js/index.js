const jogadores =  document.querySelectorAll('.jogador')

jogadores.forEach(personagem => {
    personagem.addEventListener('click',() => {
       
        const personagemselecionado = document.querySelector('.selecionado');
        personagemselecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        const imgpersonagemgrande = document.querySelector('.jogador-grande')

        const imaperso = personagem.getAttribute('data-ima')
        imgpersonagemgrande.src = `./src/imagens/${imaperso}`

        const nomeperso = document.getElementById('nome-jogador')
        nomeperso.innerText = personagem.getAttribute('data-name')

        const descriperso = document.getElementById('descricao-jogador')
        descriperso.innerText = personagem.getAttribute('data-descri')
    } )
})
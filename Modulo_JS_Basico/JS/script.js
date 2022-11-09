
// seleciona elementos e objetos, retorna o primeiro elemento dentro de um documento
// O evento onSubmit do JavaScript é uma ótima forma de se automatizar tarefas
        // como por exemplo quando o usuario clica em um butão



function meuEscopo () {
    
    const resultado = document.querySelector('.resultado');
    const form = document.querySelector('.form');

    function recebeEventoForm (evento){
        evento.preventDefault();

       const nome = document.querySelector('.Nome');
       const sobrenbome = document.querySelectorAll('.Sobrenome');
       const peso  = document.querySelector('.Peso');
       const altura = document.querySelector('.Altura');
       console.log(nome.value, sobrenbome, peso, altura)

       form.addEventListener('submit', recebeEventoForm);
    }
}
meuEscopo()
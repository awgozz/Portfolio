/* Script SOBRE MIM */
/*Esse Script é responsável por exibir ou ocultar a descrição do projeto "Sobre Mim" quando o link é clicado*/
document.getElementById('sobre-link').addEventListener('click', function(e) {
    e.preventDefault();
    var sobreDesc = document.getElementById('sobre-descricao');
    var formacaoDesc = document.getElementById('formacao-descricao');
    var portfolioDesc = document.getElementById('portfolio-descricao');
    var contatoDesc = document.getElementById('contato-descricao');
    // Fecha todas as outras abas
    if (formacaoDesc && formacaoDesc.classList.contains('aberto')) {
        formacaoDesc.classList.remove('aberto');
    }
    if (portfolioDesc && portfolioDesc.classList.contains('aberto')) {
        portfolioDesc.classList.remove('aberto');
    }
    if (contatoDesc && contatoDesc.classList.contains('aberto')) {
        contatoDesc.classList.remove('aberto');
    }
    sobreDesc.classList.toggle('aberto');
});

// Script Formação
/*Esse Script é responsável por exibir ou ocultar a descrição do projeto "Formação" quando o link é clicado*/
document.getElementById('formacao-link').addEventListener('click', function(e) {
    e.preventDefault();
    var formacaoDesc = document.getElementById('formacao-descricao');
    var sobreDesc = document.getElementById('sobre-descricao');
    var portfolioDesc = document.getElementById('portfolio-descricao');
    var contatoDesc = document.getElementById('contato-descricao');
    // Fecha todas as outras abas
    if (sobreDesc && sobreDesc.classList.contains('aberto')) {
        sobreDesc.classList.remove('aberto');
    }
    if (portfolioDesc && portfolioDesc.classList.contains('aberto')) {
        portfolioDesc.classList.remove('aberto');
    }
    if (contatoDesc && contatoDesc.classList.contains('aberto')) {
        contatoDesc.classList.remove('aberto');
    }
    formacaoDesc.classList.toggle('aberto');
});

// Script Portfólio
/*Esse Script é responsável por exibir ou ocultar a descrição do projeto "Portfólio" quando o link é clicado*/
document.getElementById('portfolio-link').addEventListener('click', function(e) {
    e.preventDefault();
    var portfolioDesc = document.getElementById('portfolio-descricao');
    var sobreDesc = document.getElementById('sobre-descricao');
    var formacaoDesc = document.getElementById('formacao-descricao');
    var contatoDesc = document.getElementById('contato-descricao');
    // Fecha todas as outras abas
    if (sobreDesc && sobreDesc.classList.contains('aberto')) {
        sobreDesc.classList.remove('aberto');
    }
    if (formacaoDesc && formacaoDesc.classList.contains('aberto')) {
        formacaoDesc.classList.remove('aberto');
    }
    if (contatoDesc && contatoDesc.classList.contains('aberto')) {
        contatoDesc.classList.remove('aberto');
    }
    portfolioDesc.classList.toggle('aberto');
});

// Script Contato
/*Esse Script é responsável por exibir ou ocultar a descrição do projeto "Contato" quando o link é clicado*/
document.getElementById('contato-link').addEventListener('click', function(e){
    e.preventDefault();
    var contatoDesc = document.getElementById('contato-descricao');
    var sobreDesc = document.getElementById('sobre-descricao');
    var formacaoDesc = document.getElementById('formacao-descricao');
    var portfolioDesc = document.getElementById('portfolio-descricao');
    // Fecha todas as outras abas
    if (sobreDesc && sobreDesc.classList.contains('aberto')) {
        sobreDesc.classList.remove('aberto');
    }
    if (formacaoDesc && formacaoDesc.classList.contains('aberto')) {
        formacaoDesc.classList.remove('aberto');
    }
    if (portfolioDesc && portfolioDesc.classList.contains('aberto')) {
        portfolioDesc.classList.remove('aberto');
    }
    contatoDesc.classList.toggle('aberto');
});
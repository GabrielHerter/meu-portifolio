var btnInformacoes = document.getElementById('mostrar-esconder-info');
var informacoes = document.getElementById('informacoes_pessoais');

btnInformacoes.addEventListener('click', function(){

    if(informacoes.style.display === 'block') {
        informacoes.style.display = 'none';
    } else {
        informacoes.style.display = 'block';
    }

});


var btnGostoFazer = document.getElementById('mostrar-esconder-gosto');
var gostoFazer = document.getElementById('gosto_fazer');

btnGostoFazer.addEventListener('click', function(){

    if(gostoFazer.style.display === 'block') {
        gostoFazer.style.display = 'none';
    } else {
        gostoFazer.style.display = 'block';
    }

});

var btnEstudos = document.getElementById('mostrar-esconder-estudos');
var estudos = document.getElementById('estudos');

btnEstudos.addEventListener('click', function(){

    if(estudos.style.display === 'flex') {
        estudos.style.display = 'none';
    } else {
        estudos.style.display = 'flex';
    }

});


btnInformacoes.addEventListener('click', function(){
    if(informacoes.style.display === 'block'){
        btnGostoFazer.style.display = 'none';
        btnEstudos.style.display = 'none';
    } else {
        btnGostoFazer.style.display = 'block';
        btnEstudos.style.display = 'block';
    }
});

btnGostoFazer.addEventListener('click', function(){
    if(gostoFazer.style.display === 'block'){
        btnInformacoes.style.display = 'none';
        btnEstudos.style.display = 'none';
    } else {
        btnInformacoes.style.display = 'block';
        btnEstudos.style.display = 'block';
    }
});

btnEstudos.addEventListener('click', function(){
    if(estudos.style.display === 'flex'){
        btnGostoFazer.style.display = 'none';
        btnInformacoes.style.display = 'none';
    } else {
        btnGostoFazer.style.display = 'block';
        btnInformacoes.style.display = 'block';
    }
});
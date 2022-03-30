function menulateral() {
    let valor = document.querySelector('#menu-area');

    if (valor.style.width == '200px') {
        valor.style.width = '0px';
    } else {
        valor.style.width = '200px'
    }
}
function scrolltop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function scrollnone() {
    if (window.scrollY === 0) {
        document.querySelector('.float-icon-arrow').style.display = 'none';
    } else {
        document.querySelector('.float-icon-arrow').style.display = 'block';
    }
}
window.addEventListener('scroll', scrollnone);


function clicar() {
    document.querySelector('#calc1').style.display = 'none';
    document.querySelector('#calc2').style.display = 'none';
    document.querySelector('#calc3').style.display = 'none';
    document.querySelector('.conteudo').style.display = 'block';
    document.querySelector('#calculadora-simples').style.display = 'block';
    document.querySelector('.legenda-off').style.display = 'none';
    document.querySelector('.voltar-projetos').style.display = 'block';
}
function clicar2() {
    document.querySelector('.voltar-projetos').style.display = 'block';
    document.querySelector('#calc1').style.display = 'none';
    document.querySelector('#calc2').style.display = 'none';
    document.querySelector('#calc3').style.display = 'none';
    document.querySelector('#calculadora-porcento').style.display = 'block'
    document.querySelector('.legenda-off').style.display = 'none';
}
function clicar3() {
    document.querySelector('.voltar-projetos').style.display = 'block';
    document.querySelector('#calc1').style.display = 'none';
    document.querySelector('#calc2').style.display = 'none';
    document.querySelector('#calc3').style.display = 'none';
}

function displaynum(n1) {
    Calculadora.text1.value = Calculadora.text1.value + n1;
}
function atualizardiv() {
    document.getElementById('atualizar').value = "";
}

//VERIFICAÇÃO DE CADASTRO 

function cadastro() {
    let nome = document.querySelector('#user-name').value;
    let lastname = document.querySelector('#lastname').value;
    let email = document.querySelector('#email').value;
    let age = document.querySelector('#age').value;
    let genre = document.querySelector('#genero').value;

    if (nome == '' || nome == null) {
        document.querySelector('.campovazio1').style.display = 'block';
    } else if (email == '' || email == null) {
        document.querySelector('.campovazio3').style.display = 'block';
        document.querySelector('.campovazio1').style.display = 'none';
    } else if (age == '' || age == null || age < 12) {
        document.querySelector('.campovazio4').style.display = 'block';
        document.querySelector('.campovazio3').style.display = 'none';
        document.querySelector('.campovazio1').style.display = 'none';
    } else if (genre == '' || genre == null) {
        document.querySelector('.campovazio5').style.display = 'block';
    } else {
        document.querySelector('.main3').style.display = 'block';
        document.querySelector('#res-name').value = nome;
        document.querySelector('#res-sobrenome').value = lastname;
        document.querySelector('#res-email').value = email;
        document.querySelector('#res-age').value = age + ' anos';
        document.querySelector('#res-genre').value = genre;
        document.querySelector('#input-btn').style.display = 'none';
        document.querySelector('.campovazio1').style.display = 'none';
        document.querySelector('.campovazio3').style.display = 'none';
        document.querySelector('.campovazio4').style.display = 'none';
        document.querySelector('.campovazio5').style.display = 'none';
    }
}
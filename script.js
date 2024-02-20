const textInput = document.getElementById("originalText");
const btn1 = document.getElementById("criptografar");
const btn2 = document.getElementById("descriptografar");
const btnCopy = document.getElementById("copiar");
const output = document.getElementById("output");
const p = document.getElementById("p");
const imgPesquisa = document.getElementById("img__pesquisa");


let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let caixa = document.getElementById('caixa');


textInput.addEventListener('keypress', function (e) {
    if (!checkChar(e)) {
        e.preventDefault();
    }
});

function checkChar(e) {
    let char = String.fromCharCode(e.keyCode);
    let pattern = '[a-zç,.\\s]';
    if (char.match(pattern)) {
        return true;
    }
}

function criptografar() {
    if (textInput.value != '') {
        const textoInicial = textInput.value;
        const textoCodificado = textoInicial.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        esconderConteudo();
        showNewText();
        let novoTexto = document.getElementById("output")
        novoTexto.innerHTML = textoCodificado;
    }
}

function descriptografar() {
    if (textInput.value != '') {
        const textoInicial = textInput.value;
        const textoDecodificado = textoInicial.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
        esconderConteudo();
        showNewText();
        let novoTexto = document.getElementById("output")
        novoTexto.innerHTML = textoDecodificado;
    }
}

function esconderConteudo() {
    let elementosCaixa = document.getElementById("containerCaixa");
    elementosCaixa.style.display = "none";
}

function showNewText() {
    document.getElementById("novoTexto").removeAttribute("style");
    document.getElementById("copiar").removeAttribute("style");
}

trilho.addEventListener('click', (e) => {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
    textInput.classList.toggle('dark');
    btn1.classList.toggle('dark');
    btn2.classList.toggle('dark');
    caixa.classList.toggle('dark');
    output.classList.toggle('dark');
    btnCopy.classList.toggle('dark');
    p.classList.toggle('dark');
    imgPesquisa.classList.toggle('dark');

    if (imgPesquisa.src.includes('grammar-correction-animate.svg')) {
        imgPesquisa.src = 'innovation-animate.svg';
    } else {
        imgPesquisa.src = 'grammar-correction-animate.svg';
    }

});

const alerta = document.getElementById("alerta");
btnCopy.addEventListener("click", (e) => {
    navigator.clipboard.writeText(output.value)
        .then(() => {
            alerta.textContent = 'Texto copiado com sucesso.';
            alerta.style.display = 'block';
            setTimeout(() => {
                alerta.style.display = 'none';
            }, 2000);
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
});
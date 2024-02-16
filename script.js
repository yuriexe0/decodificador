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


function criptografar(){
    const textoInicial = textInput.value;    
    const textoSemAcentos = textoInicial.normalize('NFD').replace(/[\u0300-\u036f]/g, '');    
    const textoLowerCase = textoSemAcentos.toLowerCase();   
    const textoCodificado = textoLowerCase.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    console.log(textoCodificado);
    esconderConteudo();
    showNewText();
    let novoTexto = document.getElementById("output")
    novoTexto.innerHTML = textoCodificado;
}

function descriptografar(){
    const textoInicial = textInput.value;    
    const textoSemAcentos = textoInicial.normalize('NFD').replace(/[\u0300-\u036f]/g, '');    
    const textoLowerCase = textoSemAcentos.toLowerCase();  
    const textoDecodificado = textoLowerCase.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    console.log(textoDecodificado);  
    esconderConteudo();
    showNewText();
    let novoTexto = document.getElementById("output")
    novoTexto.innerHTML = textoDecodificado;
}

function esconderConteudo(){
    let elementosCaixa = document.getElementById("containerCaixa");
    elementosCaixa.style.display = "none"; 
}

function showNewText(){
    document.getElementById("novoTexto").removeAttribute("style");
    document.getElementById("copiar").removeAttribute("style");
}

trilho.addEventListener('click', (e) =>{
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
btnCopy.addEventListener("click", (e) =>{
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
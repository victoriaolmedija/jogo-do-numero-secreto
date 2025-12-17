let listDeNumerosSortiados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirTextoNaTela (tag, texto ) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate:1.2});
}
function exibirMensagemInical () {
    exibirTextoNaTela ('h1', 'jogo do número secreto');
    exibirTextoNaTela ('p', 'escolha um número entre 1 a 50');
}
exibirMensagemInical();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        chute > numeroSecreto 
        exibirTextoNaTela ('p', `o número secreto é menor que ${chute}`);
        exibirTextoNaTela ('h1', 'Errou!');
    } if (chute < numeroSecreto) {
        exibirTextoNaTela('p', `o número secreto é maior que ${chute}`);
        exibirTextoNaTela('h1', 'Errou!');
    }
    tentativas++;
    limparCampo();
}
function gerarNumeroAleatorio (params) {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1 );
    let quantidadeDeElementos = listDeNumerosSortiados.length;

    if (quantidadeDeElementos == numeroLimite) {
        listDeNumerosSortiados = [];
    }

    if (listDeNumerosSortiados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listDeNumerosSortiados.push(numeroEscolhido);
        console.log(listDeNumerosSortiados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInical();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

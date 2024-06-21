function verificarSeOChutePossuiValorValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        console.log('valor invalido');
    }

    if (numeroDiferenteDoValorPermitido(numero)) {
        console.log(`valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}!`);
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroDiferenteDoValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

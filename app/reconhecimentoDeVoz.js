const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibirChuteNaTela(chute);
    verificarSeOChutePossuiValorValido(chute);
}

function exibirChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
        <span class="box__chute">${chute}</span>`
}

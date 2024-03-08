function encodeMSG() {
    const secretMessage = document.getElementById('secretmessage').value;
    const codedMessage = btoa(secretMessage);

    urlGeneratore(codedMessage);
}

function urlGeneratore(codedMessage) {
    const baseURL = window.location.origin;
    const trueURL = baseURL + '/' + codedMessage;

    seeURL(trueURL);
}

function seeURL(trueURL) {
    const urlToCopy = document.getElementById('url');
    urlToCopy.innerHTML = `<p onclick="copyClic()">${trueURL}</p>`;
    hideform();
}

function copyClic() {
    const trueURL = document.getElementById('url').innerText;
    navigator.clipboard.writeText(trueURL)
        .then(() => {
            alert('url bien copier');
        })
        .catch(err => {
            console.error('erreur', err);
        });
}

function hideform() {
    const form = document.getElementById('msgForm');
    if (form) {
        form.style.display = 'none';
    }
}

function decodeMSG() {
    const codedMSG =window.location.hash;
    const decodedMessage = atob(codedMSG)
    
    seeDecodedMSG(decodedMessage);
}

function seeDecodedMSG(decodedMessage) {
    // const msgDecod = do
}
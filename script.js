
document.getElementById('infoButton').addEventListener('click', function() {
    var extraInfo = document.getElementById('extraInfo');
    if (extraInfo.style.display === 'none') {
        extraInfo.style.display = 'block';
        this.textContent = 'Ocultar informações';
    } else {
        extraInfo.style.display = 'none';
        this.textContent = 'Mostrar mais informações';
    }
});
